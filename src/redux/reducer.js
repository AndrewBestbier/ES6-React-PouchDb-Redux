'use strict';

let initialState = {
  answers: {}
};

export default (state=initialState, action) => {
  switch (action.type) {
  case 'FETCH_ANSWERS':
    return {
      ...state,
      answers: action.answers
    };
  case 'DELETE_ANSWERS':
    return state;
    case 'NEW_SURVEY_ANSWER':
      return state;
  default:
    return state;
  }
}
