import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../Home/Home';
import Submit from '../Submit/Submit';

const Routes = () =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/submit' component={Submit} />
  </Switch>

export default Routes;
