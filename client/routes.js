import React from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';
import { Main } from './components';


const Routes = () => {
  return (
    <Router history={history}>
      <Main>
        <Switch>
        </Switch>
      </Main>
    </Router>
  );
};

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Routes);
