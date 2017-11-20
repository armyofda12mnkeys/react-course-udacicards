import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { submitNewDeckToAsyncStorage } from '../utils/api';
import {connect} from 'react-redux';
import { addDeck } from '../actions/actions';

class AddDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  submit = () => {
    //save to AsyncStorage
    const key = this.state.text.replace(" ", "_");
    const value = this.state.text;

    submitNewDeckToAsyncStorage({ value, key });

    //save to redux (or do redux-persist)
    this.props.dispatch(addDeck({
      [key]: {title: value, questions: []}
    }));

    //update local state
    this.setState({ text: '' });

    this.props.navigation.dispatch(NavigationActions.back({
      key: 'AddDeck' //not sure what this optional param does, pop off stack?
    }));
  }

  render() {
    return (
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>What is the title of your new deck?</Text>
        <TextInput
          style={{borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5,}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          underlineColorAndroid='transparent'
          placeholder='Deck Title'
          maxLength={30}
        />
        <Text>You are about to add a deck called: {this.state.text}</Text>
        <TouchableOpacity onPress={this.submit} style={styles.submitBtn}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

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


export default connect()(AddDeck);

/*
<TouchableOpacity onPress={ () => this.props.navigation.navigate(
  'EmptyTest',
  { extraInfo: 'test' }
) }>
  <Text>Test Navigation to another Screen</Text>
</TouchableOpacity>
*/
