import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckInfo from './components/DeckInfo';
import AddCardToDeck from './components/AddCardToDeck';
import Quiz from './components/Quiz';
import EmptyTest from './components/test/EmptyTest';

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo';

import rootReducer from './reducers/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//assume i dont need <ConnectedRouter and routerMiddleware and createHistory

import Reactotron from 'reactotron-react-native'
import './ReactotronConfig';//hmmm can't connect try later
//"reactotron-react-native": "^1.12.3"
Reactotron.log('something really interesting happened!!!')

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;
/*
const store = createStore(rootReducer,
  //composeEnhancers(
    applyMiddleware(thunk) //, logger
  //)
);
*/
const store = Reactotron.createStore(rootReducer,
  //composeEnhancers(
    applyMiddleware(thunk) //, logger
  //)
);



function UdaciStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DeckList',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
      //title: 'Home',
    }
  },
  DeckInfo: { 
    screen: DeckInfo,
    /*
    navigationOptions: {
      header: null
      //title: 'Home',
    }
    */
  },
  AddCardToDeck: {    
    screen: AddCardToDeck,
    /*
    navigationOptions: {
      header: null
      //title: 'Home',
    }
    */
  },
  Quiz: {
    screen: Quiz,
    /*
    navigationOptions: {
      header: null
      //title: 'Home',
    }
    */
  },
  EmptyTest: {
    screen: EmptyTest,
    navigationOptions: {
      //header: null
      title: 'TEST',
    }
  },
});


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor={'purple'} barStyle='light-content' />
          <MainNavigator style={{margin:0, padding: 0}} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

//export default connect()(App);


/*
<Text>Shake your phone to open the developer menu.</Text>
*/




