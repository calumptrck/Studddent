import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../Home/Home';
import Submit from '../Submit/Submit';
import {Filters} from '../types';

const Routes = () =>
  <Switch>
    <Route exact path='/' render={(props) => <Home {...props} pageId={Filters.All}/>}/>
    <Route exact path='/design' render={(props) => <Home {...props} pageId={Filters.Design}/>} />
    <Route exact path='/dev' render={(props) => <Home {...props} pageId={Filters.Development}/>} />
    <Route exact path='/development' render={(props) => <Home {...props} pageId={Filters.Development}/>} />
    <Route exact path='/utility' render={(props) => <Home {...props} pageId={Filters.Utility}/>} />
    <Route exact path='/other' render={(props) => <Home {...props} pageId={Filters.Utility}/>} />
    <Route path='/submit' component={Submit} />
  </Switch>

export default Routes;
