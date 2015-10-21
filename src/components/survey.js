'use strict';

import { insertSurveyAnswer } from '../redux/actions';
import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';

const {
  RaisedButton,
  TextField,
  DropDownMenu
} = MUI;


export default React.createClass({

  getInitialState() {
    return { answer: {}};
  },

  _newPersonHandler() {
    store.dispatch(insertSurveyAnswer(this.state.answer));
  },

  _onChange: function(ref,b,c,d) {

      var currentUserAnswer = this.state.answer;
      currentUserAnswer[ref] = d.payload;

      this.setState({answer: currentUserAnswer});
  },

  render() {

    return (
      <div>
        <h3>Please answer our survey.</h3>
        <h3>Which of these frameworks are you currently using the most?</h3>
        <DropDownMenu menuItems={
          [{ payload: 'angular', text: 'Angular' },
          { payload: 'react', text: 'React' }]
        } onChange={this._onChange.bind(this, 'currentlyUsing')}/>

        <h3>Which of these frameworks are you most interested in using?</h3>
        <DropDownMenu menuItems={
          [{ payload: 'angular', text: 'Angular' },
          { payload: 'react', text: 'React' }]
        } onChange={this._onChange.bind(this, 'interestedUsing')}/>

        <h3>Are you using ES6?</h3>
        <DropDownMenu menuItems={
          [{ payload: 'yes', text: 'Yes' },
          { payload: 'no', text: 'No' }]
        } onChange={this._onChange.bind(this, 'usingES6')}/>

        <h3>How many years of Javascript experience do you have?</h3>
        <DropDownMenu menuItems={
          [{ payload: '1', text: '0-1' },
          { payload: '2', text: '1-2' }]
        } onChange={this._onChange.bind(this, 'yearsExperience')}/>

        <RaisedButton label="Create" secondary={true} onClick={this._newPersonHandler} />
      </div>
    );
  }
});
