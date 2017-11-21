import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationActions } from 'react-navigation';

class DeckItem extends React.Component {
//export default function DeckItem ({db_key, title, numCards}) {
  
  toDeckInfo = (db_key) => {
    //*
    this.props.navigation.dispatch(NavigationActions.navigate({ 
      routeName: 'DeckInfo', 
      params: {db_key}
    }))
    //*/
    console.log('props2', this.props);
  }
  
  render() {
    console.log('props', this.props);
    
    return (
      <View style={{flex:1}}>
        <TouchableOpacity onPress={() => this.toDeckInfo(this.props.db_key)} style={styles.submitBtn}>
          <Text style={{fontSize: 14, color: 'white'}}>View Deck Info: {this.props.db_key}</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 14}}>title: {this.props.title}</Text>
        <Text style={{fontSize: 14}}># of cards: {this.props.numCards}</Text>
      </View>
    );
  }
}

export default DeckItem;

const styles = StyleSheet.create({
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

/*
const navigateAction = NavigationActions.navigate({
  routeName: 'Profile',
  params: {},

  // navigate can have a nested navigate action that will be run inside the child router
  action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
})
this.props.navigation.dispatch(navigateAction)
*/