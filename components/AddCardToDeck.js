import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

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
    //this.props.boundAddCardToDeck();
    console.log('testing submit');
    alert('testing submit');
  }

  render() {
    return (
      <View>
        <Text>Add Card to Deck</Text>
        <Text>Enter your Question:</Text>
        <TextInput
          style={{borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5,}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
          underlineColorAndroid='transparent'
          placeholder='Ex: Whats the coolest planet?'
          maxLength={30}
        />
        <Text>Enter your Answer:</Text>
        <TextInput
          style={{borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5,}}
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


/*
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundAddCardToDeck: (post_id) => {
      //console.log('deleting post:', post_id);
      dispatch(addCardToDeck({post_id, view: ownProps.view}));
       //if(ownProps.view==='full') {
       // ownProps.history.push('/');
       //}
      //dispatch(test('id-101'));
    },
  }
};
*/

export default connect(null,null)(AddCardToDeck);
//export default AddCardToDeck;