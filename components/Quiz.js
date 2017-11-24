import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { clearLocalNotification, setLocalNotification } from '../utils/api';

//export default 
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      view_mode: 'quiz_question', //quiz_answer, quiz_results
      quiz_question_index: 0, 
      correct: 0, 
      incorrect: 0
    };
  }
  
  static navigationOptions = ({navigation}) => {
    const { db_key } = navigation.state.params;
    return {
      title: `Quiz for "${db_key}" deck`
    }
  }
  
  submitQuizCard(is_correct_or_incorrect) {
    console.log(is_correct_or_incorrect);
    //set correct or incorrect
    this.setState(previousState => {
      if(is_correct_or_incorrect==='correct'){
        return { 
          correct: previousState.correct + 1,
        };
      } else {
        return { 
          incorrect: previousState.incorrect + 1,
        };
      }
    });
    //advance question (or switch to results view)
    const current_question_index = this.state.quiz_question_index;
    if(current_question_index+1 < this.props.deck.questions.length) {
      this.setState({view_mode: 'quiz_question', quiz_question_index: current_question_index+1});//do i need prev state???
    } else {
      clearLocalNotification()
        .then(setLocalNotification);
      this.setState({view_mode: 'quiz_results'});
    }
    
  }
  
  flipCard() {
    console.log('flipCard');
    this.setState(previousState => {
      if(previousState.view_mode === 'quiz_question') {
        return { 
          view_mode: 'quiz_answer', 
        };
      } else {
        return { 
          view_mode: 'quiz_question', 
        };
      }
    });
  }
  
  restartQuiz() {
    this.setState({
      view_mode: 'quiz_question',
      quiz_question_index: 0, 
      correct: 0, 
      incorrect: 0
    });
  }
  gotoDeckInfo() {
    this.props.navigation.dispatch(NavigationActions.back({
      key: null //'AddCardToDeck' //not sure what this optional param does, pop off stack?
    }));
  }
  
  render() {
    const card = this.props.deck.questions[this.state.quiz_question_index];
    
    
    return (
      <View style={styles.container}>
        {/*<Text>{this.state.view_mode}</Text>*/}
        {
          (this.state.view_mode === 'quiz_question')
          ?
          <View style={styles.container}>
            <Text>{this.state.quiz_question_index + 1}/{this.props.deck.questions.length}</Text>
            <Text style={styles.h1}>{card.question}</Text>            
            <TouchableOpacity style={styles.flipCard} onPress={()=>this.flipCard()}>
              <Text style={{color: 'red'}}>Show Answer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.submitQuizCard('correct')} style={[styles.submitBtn, {backgroundColor: 'green'}]}>
              <Text style={{color: 'white'}}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.submitQuizCard('incorrect')} style={[styles.submitBtn, {backgroundColor: 'red'}]}>
              <Text style={{color: 'white'}}>Incorrect</Text>
            </TouchableOpacity>
          </View>
          :
          <Text></Text>
        }
        
        {
          (this.state.view_mode === 'quiz_answer')
          ?
          <View style={styles.container}>
            <Text>{this.state.quiz_question_index + 1}/{this.props.deck.questions.length}</Text>
            <Text style={styles.h1}>{card.answer}</Text>
            <TouchableOpacity style={styles.flipCard} onPress={()=>this.flipCard()}>
              <Text style={{color: 'red'}}>Show Question</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.submitQuizCard('correct')} style={[styles.submitBtn, {backgroundColor: 'green'}]}>
              <Text style={{color: 'white'}}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.submitQuizCard('incorrect')} style={[styles.submitBtn, {backgroundColor: 'red'}]}>
              <Text style={{color: 'white'}}>Incorrect</Text>
            </TouchableOpacity>
          </View>
          :
          <Text></Text>
        }
        
        {
          (this.state.view_mode === 'quiz_results')
          ?
          <View style={styles.container}>
            <Text>You scored {Math.round((this.state.correct / (this.state.correct + this.state.incorrect))*100)}% ({this.state.correct} out of {this.state.correct + this.state.incorrect} correct)</Text>
            <TouchableOpacity onPress={()=>this.restartQuiz()} style={[styles.submitBtn, {backgroundColor: 'green'}]}>
              <Text style={{color: 'white'}}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.gotoDeckInfo()} style={[styles.submitBtn, {backgroundColor: 'red'}]}>
              <Text style={{color: 'white'}}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
          :
          <Text></Text>
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  flipCard: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  submitBtn: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});




function mapStateToProps(state, {navigation}) {
  const {db_key} = navigation.state.params;
  console.log('Quiz db_key',db_key);
  
  const decks = state.decks;

  const deck = decks[db_key]; 
  /*decks.find((deck) => { 
      return deck.db_key === db_key;
  });*/
  console.log('Quiz deck',deck);
  
  return {
    db_key: db_key,
    deck: deck //{ key: 'item1', db_key: 'item1', title: 'Title #1', questions: [] },
  }
}
/*null for now
function mapDispatchToProps(dispatch, {navigation}) {
  const {db_key} = navigation.state.params;
  
  return {
    remove: () => dispatch(addEntry({      
    })),
    goBack: () => navigation.goBack()
  }
}
*/

export default connect(mapStateToProps,null)(Quiz);