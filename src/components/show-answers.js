'use strict';

import MUI from 'material-ui';
import React from 'react';

const {
  Dialog,
  RaisedButton
} = MUI;

export default React.createClass({
  _showAnswer() {
    this.refs.answerDialog.show();
  },

  render() {
    let { answer } = this.props;

    return (
      <span>
        <RaisedButton label="Show Answers" primary={true}
                      onClick={this._showAnswer} />

                    <Dialog title="Answers in the Redux Store" ref="answerDialog"
                autoDetectWindowHeight={true} autoScrollBodyContent={true}>
          <div><pre>{JSON.stringify(answer, null, 2)}</pre></div>
        </Dialog>
      </span>
    );
  }
});
