import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Commands from './pages/Commands';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Landing } />
      <Route path="/commands" component={ Commands } />
    </Switch>
  </BrowserRouter>
);

export default Routes;