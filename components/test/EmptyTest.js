import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

//export default 
class EmptyTest extends React.Component {
  render() {
    return (
      <View>
        <Text>EmptyTest - {this.props.navigation.state.params.extraInfo}</Text>
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

export default EmptyTest;