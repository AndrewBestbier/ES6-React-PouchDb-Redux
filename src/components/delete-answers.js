'use strict';

import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';
import { deleteAnswer } from '../redux/actions';

const { RaisedButton } = MUI;

export default React.createClass({
  styles: {
    float: 'right'
  },

  _deleteAnswerHandler() {
    store.dispatch(deleteAnswer())
  },

  render() {
    return (
        <RaisedButton label="Delete all Answer" style={this.styles}
                      onClick={this._deleteAnswerHandler} />
    );
  }
});
