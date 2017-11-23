import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationActions } from 'react-navigation';

class DeckItem extends React.Component {
//export default function DeckItem ({db_key, title, numCards}) {
  
  gotoDeckInfo = (db_key) => {
    //*
    this.props.navigation.dispatch(NavigationActions.navigate({ 
      routeName: 'DeckInfo', 
      params: {db_key}
    }))
    //*/
    //console.log('props2', this.props);
  }
  
  render() {
    const db_key = this.props.db_key;
    //console.log('props', this.props);
    
    return (
      <View style={[styles.deck, {flex:1}]}>
        <TouchableOpacity onPress={() => this.gotoDeckInfo(db_key)} style={styles.submitBtn}>
          <Text style={{fontSize: 14, color: 'white'}}>View Deck: {this.props.db_key}</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 14, textAlign:'center'}}>title: {this.props.title}</Text>
        <Text style={{fontSize: 14, textAlign:'center'}}># of cards: {this.props.numCards}</Text>
      </View>
    );
  }
}

export default DeckItem;

const styles = StyleSheet.create({
  deck: {    
    borderBottomWidth: 5,
    borderBottomColor: '#CCC',
    width: '100%',
    padding: 20,
  },
  submitBtn: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 10,
      paddingLeft: 30,
      paddingRight: 30,
      height: 45,
      //width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
});
