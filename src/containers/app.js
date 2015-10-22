'use strict';

import NavBar from './nav-bar';
import React from 'react';
import { Panel } from 'react-bootstrap';

const App = React.createClass({

  render() {

    return (
      <div>
        <NavBar/>
        <Panel>
          <div>
            {this.props.children}
          </div>
        </Panel>
      </div>
    );
  }
});

export default App;
