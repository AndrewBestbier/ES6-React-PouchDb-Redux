'use strict';

import MUI from 'material-ui';
import React from 'react';
import { Link } from 'react-router';

const { Tabs, Tab } = MUI;

export default React.createClass({
  _handleTabActive(tab) {
    let { route } = tab.props;
    let { history } = this.props;

    history.pushState(null, route);
  },

  render() {
    let { pathname } = this.props;

    return (
      <Tabs value={pathname}>
        <Tab label="Survey" route="/survey" value="/survey" onActive={this._handleTabActive} />
        <Tab label="Results" route="/results" value="/results" onActive={this._handleTabActive} />
      </Tabs>
    );
  }
});
