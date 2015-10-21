import _ from 'underscore';

var coloursArray = [{
  color: "#F7464A",
  highlight: "#FF5A5E"
}, {
  color: "#46BFBD",
  highlight: "#5AD3D1"
}];

export function getSurveyResults(rows) {
  var docs = rows.rows.map(function (row) {return row.doc;});
  return convertRawDataToChartJsFormat(docs)
};

function convertRawDataToChartJsFormat(docs) {

  /*
   * Underscore's reduce is used, starting with the basis of the scaffolding of the required Chartjs object
   * The first loop (reduce) is through the rows returned from PouchDB. The second nested loop is through the object properties
   */
  return _.reduce(docs, function (resultsObject, doc) {
    _.each(resultsObject, function(array, key) {
      var answer = doc[key];

      /* getResultKey() finds the answer in the resultsObject and returns it. If it does not exist, it is created */
      var result = getResultKey(resultsObject, answer, key);
      result.value += 1;
    });

    return resultsObject;
  }, createEmptyResultsObject());
}

function getResultKey(resultsObject, answer, key) {
  var result = _.findWhere(resultsObject[key], {
    label: answer
  });

  if (result) {
    return result;
  }

  return createAnswerEntry(answer, key, resultsObject);
}

function createEmptyResultsObject(){
    return {
      currentlyUsing: [],
      interestedUsing: [],
      usingES6: [],
      yearsExperience: []
    };
}

function createAnswerEntry(answer, key, resultsObject) {
  var result = {
    label: answer,
    value: 0,
    color: coloursArray[resultsObject[key].length].color,
    highlight: coloursArray[resultsObject[key].length].highlight
  };

  resultsObject[key].push(result);
  return result;
}
