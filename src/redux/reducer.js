'use strict';

let initialState = {
  answer: []
};

export default (state=initialState, action) => {
  switch (action.type) {
  case 'FETCH_ANSWERS':
    return {
      ...state,
      answer: action.answer
    };
  case 'DELETE_ANSWERS':
    return state;
    case 'NEW_SURVEY_ANSWER':
      return state;
  default:
    return state;
  }
}
