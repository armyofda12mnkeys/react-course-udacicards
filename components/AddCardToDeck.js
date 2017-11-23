import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { submitNewCardToDeck } from '../utils/api';
import { addCardToDeck } from '../actions/actions';

//export default 
class AddCardToDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: '', answer: '' };
  }
  
  static navigationOptions = ({navigation}) => {
    const { db_key } = navigation.state.params;    
    return {
      title: `Adding card to deck "${db_key}"`
    }
  }
  
  submit = () => {
    console.log('submit - add card to deck'); //alert('testing submit');
    var db_key = this.props.db_key;
    var card = {question: this.state.question, answer: this.state.answer};
    //set in async
    submitNewCardToDeck({card, db_key})
    
    //set in redux
    this.props.boundAddCardToDeck(card, db_key);
    
    //navigate back
    
    this.props.navigation.dispatch(NavigationActions.back({
      key: null //'AddCardToDeck' //not sure what this optional param does, pop off stack?
    }));
    //interesting, why does navigate.back not work?
    
    /*
    this.props.navigation.dispatch(NavigationActions.navigate({ 
      routeName: 'DeckInfo', 
      params: {db_key}
    }))
    */

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter your Question:</Text>
        <TextInput
          style={{borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5, width: '80%',}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
          underlineColorAndroid='transparent'
          placeholder='Ex: Whats the coolest planet?'
          maxLength={30}
        />
        <Text>Enter your Answer:</Text>
        <TextInput
          style={{borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5, width: '80%',}}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
          underlineColorAndroid='transparent'
          placeholder='Ex: Uranus!'
          maxLength={30}
        />
        <TouchableOpacity onPress={this.submit} style={styles.submitBtn}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
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
  submitBtn: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 10,
      paddingLeft: 30,
      paddingRight: 30,
      height: 45,
      //width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
});

function mapStateToProps(state, {navigation}) {
  const {db_key} = navigation.state.params;

  const decks = state.decks;

  const deck = decks[db_key]; 
  //decks.find((deck) => { 
  //    return deck.db_key === db_key;
  //});
  console.log('deck',deck);
  
  return {
    db_key: db_key,
    deck: deck //{ key: 'item1', db_key: 'item1', title: 'Title #1', questions: [] },
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundAddCardToDeck: (card, db_key) => {
      dispatch(addCardToDeck(card, db_key));
    },
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(AddCardToDeck);
//export default AddCardToDeck;