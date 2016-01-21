import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import BasePage from '../components/pages/BasePage.jsx';
import HomePage from '../components/pages/HomePage.jsx';
import SessionDetail from '../components/pages/SessionDetail.jsx';

let Routes = (
  <Router history={browserHistory}>
    <Route path='/' component={BasePage}>
      <IndexRoute component={HomePage} />
      <Route path='/sessions/:sessionId' component={SessionDetail} />
    </Route>
  </Router>
);

export default Routes;
