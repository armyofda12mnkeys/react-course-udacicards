import decks from './decksReducer.js';
//import cards from './cardsReducer.js'; // maybe ill just store in same way as the AsyncStorage for now to keep things simple and not worry about a 'db mapping' via deck keys
import quiz from './quizReducer.js';

import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  decks,
  //cards,
  quiz,
})

export default rootReducer;