import decksReducer from './decksReducer.js';
import quizReducer from './quizReducer.js';
import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  decksReducer,
  quizReducer,
//  routing: routerReducer
})

export default rootReducer;