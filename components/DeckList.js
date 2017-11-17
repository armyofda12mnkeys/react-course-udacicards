import React from 'react';
import { View, Text, List, FlatList, ListItem, StyleSheet } from 'react-native';
import { submitEntryToAsyncStorage } from '../utils/api';
import { connect } from 'react-redux';
import { fetchDecksFromAsyncStorage } from '../utils/api';
import { receiveDecks } from '../actions/actions';


//export default 
class DeckList extends React.Component {
  
  componentDidMount(){
    fetchDecksFromAsyncStorage()
    .then((decks) => { 
      console.log('decks', typeof decks); 
      //if( decks && decks.length > 0 ) {
        this.props.dispatch(receiveDecks(decks));
      //}
    })
    //
    
    //.then(()=> this.setState({
    //  ready: true
    //}))
    
  }
  renderItem = ({deck}) => {
    return <ListItem title={deck.title} />
  }
  
  render() {
    return (
      <View>
        <Text>DeckList</Text>
        
          
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: '#000000',
  },
});

export default connect()(DeckList);

/*
          <FlatList
            data={[ {title: 'Title #1', key: 'item1'}, {title: 'Title #2', key: 'item2'}, {title: 'Title #3', key: 'item3'} ]}
            renderItem={this.renderItem}
          />
*/