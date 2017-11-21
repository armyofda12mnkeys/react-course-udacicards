import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';


//export default 
class DeckInfo extends React.Component {
  
  static navigationOptions = ({navigation}) => {
    const { db_key } = navigation.state.params;    
    return {
      title: `Deck "${db_key}"`
    }
  }
  
  
  addCardToDeck = (db_key) => {
    //*
    this.props.navigation.dispatch(NavigationActions.navigate({ 
      routeName: 'AddCardToDeck', 
      params: {db_key}
    }))
    //*/
  }
  
  render() {
    const db_key = this.props.db_key;
    const deck = this.props.deck;
    return (
      <View>
        <Text style={{fontSize: 30}}>key: {db_key}</Text>      
        <Text style={{fontSize: 14}}>title: {deck.title}</Text>
        <Text style={{fontSize: 14}}># of cards: {deck.questions.length}</Text>
        <TouchableOpacity onPress={()=>this.addCardToDeck(db_key)} style={styles.submitBtn}>
          <Text style={{color: 'white'}}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>alert('blah')} style={styles.submitBtn}>
          <Text style={{color: 'white'}}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: '#000000',
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
    },
});

//export default DeckInfo;



function mapStateToProps(state, {navigation}) {
  const {db_key} = navigation.state.params;
  console.log('db_key',db_key);
  
  const decks = state.decks;

  const deck = decks[db_key]; 
  /*decks.find((deck) => { 
      return deck.db_key === db_key;
  });*/
  console.log('deck',deck);
  
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

export default connect(mapStateToProps,null)(DeckInfo);


