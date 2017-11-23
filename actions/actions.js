export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

/*
export const REMOVE_DECK = 'REMOVE_DECK';
export const REMOVE_CARD_FROM_DECK = 'REMOVE_CARD_FROM_DECK';

export const ADD_CORRECT = 'ADD_CORRECT';
export const ADD_INCORRECT = 'ADD_INCORRECT';
export const CLEAR_QUIZ = 'CLEAR_QUIZ';
*/

export function receiveDecks(decks) {  
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}


export function addDeck(deck) {  
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addCardToDeck(card, db_key) {  
  return {
    type: ADD_CARD_TO_DECK,
    card, db_key
  }
}

/*
export function removeDeck(deck_id) {  
  return {
    type: REMOVE_DECK,
    deck_id,
  }
}


export function removeCardFromDeck(card_id, deck_id) {  
  return {
    type: REMOVE_CARD_FROM_DECK,
    entry,
  }
}




export function addCorrectToQuiz() {  
  return {
    type: ADD_CORRECT
  }
}
export function addIncorrectToQuiz() {  
  return {
    type: ADD_INCORRECT
  }
}
export function clearQuiz() {  
  return {
    type: CLEAR_QUIZ
  }
}
*/
