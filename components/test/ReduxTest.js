import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

//export default 
class ReduxTest extends React.Component {
  render() {
    return (
      <View>
        <Text>ReduxTest state: x{JSON.stringify(this.state)}x</Text>
        <Text>ReduxTest props: x{JSON.stringify(this.props.test)}x</Text>
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

function mapStateToProps (state) {  
  return {
    test: state.test
  }
}


export default connect(mapStateToProps)(ReduxTest);