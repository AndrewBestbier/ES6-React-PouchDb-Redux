'use strict';

import React from 'react';
import _ from 'underscore';
import { Pie } from 'react-chartjs';
import { connect } from 'react-redux';
import store from '../redux/store';
import { fetchAnswers } from '../redux/actions';

const Results =  React.createClass({

  componentDidMount() {
    store.dispatch(fetchAnswers());
  },

  render() {

    var {answers} = this.props;

    var PieCharts = _.keys(answers).map(function(key){
      return <Pie data={answers[key]}/>
    })

    return (
      <div>
        <h3>Results</h3>
        {PieCharts}
      </div>
    );
  }
});

export default connect(mapStateToProps)(Results);

function mapStateToProps(state) {
  return {
    answers: state.answers
  };
}
