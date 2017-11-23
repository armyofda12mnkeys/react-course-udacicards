import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { submitEntryToAsyncStorage } from '../utils/api';
import { connect } from 'react-redux';
import { fetchDecksFromAsyncStorage } from '../utils/api';
import { receiveDecks } from '../actions/actions';
import DeckItem from './DeckItem';
import { AppLoading } from 'expo';
//import { List, ListItem } from 'react-native-elements';


//export default
class DeckList extends React.Component {
  state = {
    ready: false
  }

  componentDidMount(){
    //let x;
    fetchDecksFromAsyncStorage() //, maybe convert to thunk action
    .then((decks) => {
      console.log('decks1', typeof decks);
      console.log('decks2', decks);
        //add decks to redux store
        this.props.dispatch(receiveDecks(decks));

        //if( decks && decks.length > 0 )
        this.setState((state) => {
          return {
           ready: true
          }
        });
        //add cards to redux store //eh just put in decks for now
        //this.props.dispatch(receiveCards(decks));

    })
    //

    //.then(()=> this.setState({
    //  ready: true
    //}))

  }
  /*
  renderItem = ({item}) => {
    return (
      <ListItem title={item.title} />
    );
  }
  */

  render() {

    if (!this.state.ready) {
      return (
        <AppLoading />
      );
    }

    const decks = this.props.decks;
    //const {navigate} = this.props.navigation; onPress={() => navigate('Profile', {name: 'Brent'})}
    //or pass to child if not direct navigation: navigation={this.props.navigation}
    
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', borderBottomWidth: 5, borderBottomColor: '#CCC', width: '80%'}}>Number of decks: {this.props.decks.length}</Text>
        <FlatList
          data={decks}
          renderItem={({item}) => <DeckItem db_key={item.db_key} title={item.title} numCards={item.questions.length} navigation={this.props.navigation} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function mapStateToProps (state) {
  let decks = state.decks;
  console.log('DeckList.js decks', decks);
  
  let decks_new = [];
  for(let key in decks) {
    let value = decks[key];
    let title = value.title;
    let questions = value.questions;
    decks_new.push ({key: key, db_key: key, title: title, questions: questions});
  }
  console.log('DeckList.js decks redo', decks);
  
  return {
    decks: decks_new //[ {deck_1: {title: 'deck 111', questions: []}} ] //
  }
}

export default connect(mapStateToProps)(DeckList);
