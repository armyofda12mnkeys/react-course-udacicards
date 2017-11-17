import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

//export default 
class Quiz extends React.Component {
  render() {
    return (
      <View>
        <Text>Quiz</Text>
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

export default Quiz;