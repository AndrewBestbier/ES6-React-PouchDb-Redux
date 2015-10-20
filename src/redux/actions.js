'use strict';

import crypto from 'crypto';
import db from './db';


export function fetchAnswers() {
  return db.allDocs({
    include_docs: true
  }).then(answer => {
    return {
      type: 'FETCH_ANSWERS',
      answer: mapDocsFromPouch(answer)
    };
  }).catch(err => {
    throw err;
  });
};




export function deleteAnswer() {
  db.allDocs({
    include_docs: true
  }).then(records => {
    return Promise.all(
      records.rows.map(row => row.doc)
        .map(doc => db.remove(doc))
    ).then(() => {
      return {
        type: 'DELETE_ANSWERS'
      };
    });
  }).catch(err => {
    throw err;
  });
}

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

function mapDocsFromPouch(records) {
  if (!!!records) {
    return {};
  }
  return records.rows.map(record => record.doc);
}

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}
