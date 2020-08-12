import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage.js';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

// Define configuration for router with JSX
// When sees Switch it will go through routes in order then stop when match.
const AppRouter = () => (
  // Switched from BrowserRouter below to regaular Router to allow to manage our own history.
  // BrowserRouter already has history built in.
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={DashboardPage}/>
        <Route component={NotFound}/>
    </Switch>
    </div>
  </Router>
);

export default AppRouter;