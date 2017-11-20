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
    fetchDecksFromAsyncStorage()
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

    return (
      <View>
        <Text>DeckList</Text>
        <Text>ready: x{this.state.ready == false ? 'false' : 'true'}x</Text>
        <Text>x{this.props.test}x</Text>
        <Text>y{this.props.decks.length}y</Text>
        <FlatList
          data={decks}
          renderItem={({item}) => <DeckItem db_key={item.db_key} title={item.title} numCards={item.questions.length} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: '#000000',
  },
});


function mapStateToProps (state) {
  let decks = state.decks;
  console.log('decks', decks);
  
  let decks_new = [];
  for(let key in decks) {
    let value = decks[key];
    let title = value.title;
    let questions = value.questions;
    decks_new.push ({key: key, db_key: key, title: title, questions: questions});
  }
  console.log('decks_new', decks_new);
//  console.log('decks_new', decks_new[0].questions);
  
  return {
    test: "test1234",
    decks: decks_new //[ {deck_1: {title: 'deck 111', questions: []}} ] //
  }
}

export default connect(mapStateToProps)(DeckList);

/*
<FlatList
  data={decks}
  renderItem={({item}) => <DeckItem db_key={item.db_key} title={item.title} numCards={item.questions.length} />}
/>

        <FlatList
          data={[
            { key: 'item1', db_key: 'item1', title: 'Title #1' },
            { key: 'item2', db_key: 'item2', title: 'Title #2' },
            { key: 'item3', db_key: 'item3', title: 'Title #3' }
          ]}
          renderItem={({item}) => <DeckItem db_key={item.db_key} title={item.title} numCards={0} />}
        />
*/
