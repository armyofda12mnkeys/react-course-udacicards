import { ADD_CARD }  from '../actions/actions';

function cards(state={}, action) {
  switch(action.type) {
    case ADD_CARD: {
      return {
        ...state,
        ...action.card
      }
    }
    default:
      return state;
   
  }
}


export default cards;