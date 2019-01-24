import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';
import Single from './screens/Single';
import Main from './screens/Main';
import NotFound from './screens/NotFound';

const Router = () => (
  <BrowserRouter>
    <div className="main">
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/otro"
          component={Main}
        />
        <Route
          exact
          path="/task/:taskId/"
          component={Single}
        />
        <Route
          component={NotFound}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
