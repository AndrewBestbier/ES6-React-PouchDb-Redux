'use strict';

import crypto from 'crypto';
import db from './db';
import { getSurveyResults } from '../api/api';


export function fetchAnswers() {

  return db.allDocs({
    include_docs: true
  }).then(rows => {
    return {
      type: 'FETCH_ANSWERS',
      answer: getSurveyResults(rows)
    };
  }).catch(err => {
    throw err;
  });
};

export function insertSurveyAnswer(answer) {

  return db.put({
    _id: generateId(),
    currentlyUsing: answer.currentlyUsing,
    interestedUsing: answer.interestedUsing,
    usingES6: answer.usingES6,
    yearsExperience: answer.yearsExperience
  }).then(person => {
    return {
      type: 'NEW_SURVEY_ANSWER'
    };
  }).catch(err => {
    throw err;
  });
}

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}
