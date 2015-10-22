'use strict';

import { insertSurveyAnswer } from '../redux/actions';
import store from '../redux/store';
import { Panel, Input, ButtonInput } from 'react-bootstrap';
import React from 'react';

export default React.createClass({

  getInitialState() {
    return { answer: {}};
  },

  _submitAnswer() {

    if(Object.keys(this.state.answer).length === 4){
      store.dispatch(insertSurveyAnswer(this.state.answer));
    } else {
      window.alert("You have not answered all the questions");
    }
  },

  _onChange: function(ref,b) {
      var currentUserAnswer = this.state.answer;
      currentUserAnswer[ref] = b.target.value;
      this.setState({answer: currentUserAnswer});
  },

  render() {

    return (
      <Panel>
        <h3>Which of these frameworks are you currently using the most?</h3>
        <select className="form-control" onChange={this._onChange.bind(this, 'currentlyUsing')}>
          <option value="angular">Angular</option>
          <option value="react">React</option>
        </select>

        <h3>Which of these frameworks are you most interested in using?</h3>
        <select className="form-control" onChange={this._onChange.bind(this, 'interestedUsing')}>
          <option value="angular">Angular</option>
          <option value="react">React</option>
        </select>

        <h3>Are you using ES6?</h3>
        <select className="form-control" onChange={this._onChange.bind(this, 'usingES6')}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <h3>How many years of Javascript experience do you have?</h3>
        <select className="form-control" onChange={this._onChange.bind(this, 'yearsExperience')}>
          <option value="1">0-1</option>
          <option value="2">1-2</option>
        </select>
      <ButtonInput type="submit" value="Submit" bsSize="medium" onClick={this._submitAnswer} />
    </Panel>
    );
  }
});
