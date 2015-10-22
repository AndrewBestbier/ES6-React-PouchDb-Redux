'use strict';
import React from 'react';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

export default React.createClass({

  render() {

    return (
      <Navbar>
        <Nav>
          <Link to="/survey" className='navbar-brand'>Survey</Link>
          <Link to="/results" className='navbar-brand'>Results</Link>
        </Nav>
      </Navbar>
    );
  }
});
