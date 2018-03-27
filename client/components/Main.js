import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavMenu } from './';


const Main = (props) => {
  const { children } = props;

  return (
    <div>
      <NavMenu />
      <h1>Hello</h1>
      <hr />
      {children}
    </div>
  );
};

const mapState = null;

const mapDispatch = null;

export default withRouter(connect(mapState, mapDispatch)(Main));
