'use strict';

import App from './containers/app';
import Survey from './containers/survey';
import Results from './containers/results';
import React from 'react';
import {Router, Route } from 'react-router';

export default React.createClass({
  render() {
    return (
      <Router>
        <Route name="root" path="/" component={App}>
          <Route name="survey" path="survey" component={Survey}/>
          <Route name="results" path="results" component={Results}/>
        </Route>
      </Router>
    );
  }
});
