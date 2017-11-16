import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD_TO_DECK, REMOVE_CARD_FROM_DECK }  from '../actions/actions';

function decks(state={test: 'blah'}, action) {
  switch(action.type) {
    case RECEIVE_DECKS: {
      return {
        ...state,
        ...action.decks
      }
    }
    case ADD_DECK: {
      return {
        ...state,
        ...action.deck
      }
    }
    case REMOVE_DECK: {
      return {
        ...state,
        ...action.deck
      }
    }
    case ADD_CARD_TO_DECK: {
      return {
        ...state,
        ...action.deck
      }
    }
    default:
      return state;
   
  }
}


export default decks;