import { ADD_CORRECT, ADD_INCORRECT, CLEAR_QUIZ }  from '../actions/actions';

function quiz(  state={correct: 0, incorrect: 0}, action) {
  switch(action.type) {
    case ADD_CORRECT: {
      return {
        ...state,
        correct: state.correct + 1
      }
    }
    case ADD_INCORRECT: {
      return {
        ...state,
        incorrect: state.incorrect + 1
      }
    }
    case CLEAR_QUIZ: {
      return {
        correct: 0, 
        incorrect: 0
      }
    }
    default:
      return state;
   
  }
}


export default quiz;