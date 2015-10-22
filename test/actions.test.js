import * as actions from '../src/redux/actions';
import assert from 'assert';
import {resetDB} from '../src/redux/db';
import _ from 'underscore';

describe('actions', () => {
  beforeEach(() => {
    return resetDB();
  });

  describe('fetchAnswers', () => {

    it('returns empty answers if none are saved', () => {
      return actions.fetchAnswers().then(resp => {
        assert.equal(resp.answers.currentlyUsing.length, 0);
        assert.equal(resp.answers.interestedUsing.length, 0);
        assert.equal(resp.answers.usingES6.length, 0);
        assert.equal(resp.answers.yearsExperience.length, 0);
      });
    });

    it('should include formatted answer', () => {
      return actions.insertSurveyAnswer({
          currentlyUsing: 'react',
          interestedUsing: 'react',
          usingES6: true,
          yearsExperience: 1
        })
        .then(() => {
          return actions.fetchAnswers().then(resp => {
            assert.deepEqual({
              "type": "FETCH_ANSWERS",
              "answers": {
                "currentlyUsing": [{
                  "label": "react",
                  "value": 1,
                  "color": "#F7464A",
                  "highlight": "#FF5A5E"
                }],
                "interestedUsing": [{
                  "label": "react",
                  "value": 1,
                  "color": "#F7464A",
                  "highlight": "#FF5A5E"
                }],
                "usingES6": [{
                  "label": true,
                  "value": 1,
                  "color": "#F7464A",
                  "highlight": "#FF5A5E"
                }],
                "yearsExperience": [{
                  "label": 1,
                  "value": 1,
                  "color": "#F7464A",
                  "highlight": "#FF5A5E"
                }]
              }
            }, resp);
          });
        });
    });


    it('should return the correct totals', () => {
      return actions.insertSurveyAnswer({
          currentlyUsing: 'react',
          interestedUsing: 'angular',
          usingES6: true,
          yearsExperience: 1
        })
        .then(() => {
          return actions.insertSurveyAnswer({
              currentlyUsing: 'angular',
              interestedUsing: 'react',
              usingES6: false,
              yearsExperience: 2
            })
            .then(() => {
              return actions.insertSurveyAnswer({
                  currentlyUsing: 'react',
                  interestedUsing: 'react',
                  usingES6: true,
                  yearsExperience: 2
                })
                .then(() => {
                  return actions.insertSurveyAnswer({
                      currentlyUsing: 'angular',
                      interestedUsing: 'angular',
                      usingES6: false,
                      yearsExperience: 2
                    })
                    .then(() => {
                      return actions.insertSurveyAnswer({
                          currentlyUsing: 'angular',
                          interestedUsing: 'angular',
                          usingES6: false,
                          yearsExperience: 1
                        })
                        .then(() => {
                          return actions.fetchAnswers().then(resp => {

                            //Currently Using
                            assert.equal(_.findWhere(resp.answers.currentlyUsing, {
                              label: 'angular'
                            }).value, 3);
                            assert.equal(_.findWhere(resp.answers.currentlyUsing, {
                              label: 'react'
                            }).value, 2);

                            //Interested Using
                            assert.equal(_.findWhere(resp.answers.interestedUsing, {
                              label: 'angular'
                            }).value, 3);
                            assert.equal(_.findWhere(resp.answers.interestedUsing, {
                              label: 'react'
                            }).value, 2);

                            //Using ES6
                            assert.equal(_.findWhere(resp.answers.usingES6, {
                              label: false
                            }).value, 3);
                            assert.equal(_.findWhere(resp.answers.usingES6, {
                              label: true
                            }).value, 2);

                            //Years of Experience
                            assert.equal(_.findWhere(resp.answers.yearsExperience, {
                              label: 1
                            }).value, 2);
                            assert.equal(_.findWhere(resp.answers.yearsExperience, {
                              label: 2
                            }).value, 3);
                          })
                        });
                    });
                });
            });
        });
    });
  });

  //End
});
