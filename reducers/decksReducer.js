import { RECEIVE_DECKS, ADD_DECK, ADD_CARD_TO_DECK }  from '../actions/actions';
/* REMOVE_DECK, REMOVE_CARD_FROM_DECK */

function decks(state={}, action) {
  switch(action.type) {
    case RECEIVE_DECKS: {
      //if( action.decks )
      let x = {
        ...state,
        ...action.decks
      };
      console.log('x', x);
      return x;
    }
    case ADD_DECK: {
      console.log("adding deck action:", action.deck);
      //let {deck} = action.deck;
      return {
        ...state,
        ...action.deck
      }
    }
    /*
    case REMOVE_DECK: {
      return {
        ...state,
        ...action.deck
      }
    }
    */
    case ADD_CARD_TO_DECK: {
      const db_key        = action.db_key;
      const card = action.card;
      //state[db_key].questions.push( card );
      
      return {
        ...state,
        [db_key]: {
          ...state[db_key],
          questions: [
           ...state[db_key].questions,
           card
          ]
        }        
      }
    }
    
    default:
      return state;

  }
}


export default decks;
