'use strict';

import App from './app';
import NoMatch from './no-match';
import Survey from './survey';
import Results from './results';
import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

export default React.createClass({
  render() {
    return (
      <Router>
        <Route name="root" path="/" component={App}>
          <Route name="survey" path="survey" component={Survey}/>
          <Route name="results" path="results" component={Results}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
});