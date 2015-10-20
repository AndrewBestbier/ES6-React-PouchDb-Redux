'use strict';

import css from '../styles/app';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from '../redux/store';
import DeleteAnswers from './delete-answers';
import MUI from 'material-ui';
import NavBar from './nav-bar';
import React from 'react';
import ShowAnswers from './show-answers';
import { connect } from 'react-redux';
import { fetchAnswers } from '../redux/actions';

const {
  Card,
  Styles
} = MUI;

const { ThemeManager } = Styles;

injectTapEventPlugin();

let App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Styles.LightRawTheme)
    };
  },

  componentDidMount() {
    store.dispatch(fetchAnswers());
  },

  render() {
    let {answer, history, location } = this.props;

    return (
      <div>
        <NavBar history={history} pathname={location.pathname} />

        <Card style={css.appCard}>

          <ShowAnswers answer={answer} />

          <DeleteAnswers />

          <div>
            {this.props.children}
          </div>
        </Card>
      </div>
    );
  }
});

export default connect(mapStateToProps)(App);

function mapStateToProps(state) {
  return {
    answer: state.answer
  };
}
