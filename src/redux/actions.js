'use strict';

import db from './db';
import { formatSurveyResults } from '../helpers/rawDataToChartJsFormatter';

export function fetchAnswers() {

  return db.allDocs({
    include_docs: true
  }).then(rows => {
    return {
      type: 'FETCH_ANSWERS',
      answers: formatSurveyResults(rows)
    };
  }).catch(err => {
    throw err;
  });
}

export function insertSurveyAnswer(answer) {
  return db.post({
    currentlyUsing: answer.currentlyUsing,
    interestedUsing: answer.interestedUsing,
    usingES6: answer.usingES6,
    yearsExperience: answer.yearsExperience
  }).then(resp => {
    return {
      type: 'NEW_SURVEY_ANSWER'
    };
  })
  .catch(err => {
    throw err;
  });
}
