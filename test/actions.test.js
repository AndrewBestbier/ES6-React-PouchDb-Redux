import {fetchAnswers, insertSurveyAnswer} from '../src/redux/actions';
import assert from 'assert';
import {resetDB} from '../src/redux/db';

describe('actions', () => {
  beforeEach(() => {
    return resetDB();
  });

  describe('fetchAnswers', () => {

    it('returns empty answers if none are saved', () => {
      return fetchAnswers().then(resp => {
        assert.deepEqual(resp.answers.currentlyUsing.length, 0);
        assert.deepEqual(resp.answers.usingES6.length, 0);
      });
    });

    it('should include formatted answer', () => {
      return insertSurveyAnswer({
        currentlyUsing: 'react',
        interestedUsing: 'react',
        usingES6: true,
        yearsExperience: 1
      })
      .then(() => {
        return fetchAnswers().then(resp => {
          assert.deepEqual({
           "type": "FETCH_ANSWERS",
           "answers": {
            "currentlyUsing": [
             {
              "label": "react",
              "value": 1,
              "color": "#F7464A",
              "highlight": "#FF5A5E"
             }
            ],
            "interestedUsing": [
             {
              "label": "react",
              "value": 1,
              "color": "#F7464A",
              "highlight": "#FF5A5E"
             }
            ],
            "usingES6": [
             {
              "label": true,
              "value": 1,
              "color": "#F7464A",
              "highlight": "#FF5A5E"
             }
            ],
            "yearsExperience": [
             {
              "label": 1,
              "value": 1,
              "color": "#F7464A",
              "highlight": "#FF5A5E"
             }
            ]
           }
         }, resp);
        });
      });
    });

  });
});
