import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavMenu, Images, AboutMe, Skills } from './';


const Main = (props) => {
  const { children } = props;

  return (
    <div style={{ height: '100%' }}>
      <NavMenu />
      <Images />
      <AboutMe />
      <Skills />
      <hr />
      {children}
    </div>
  );
};

const mapState = null;

const mapDispatch = null;

export default withRouter(connect(mapState, mapDispatch)(Main));
