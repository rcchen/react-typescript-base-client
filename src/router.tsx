import React = require('react');

import { App } from './views/app';
import { About } from './views/about';

import { browserHistory, Route, Router } from 'react-router';

export class AppRouter extends React.Component<{}, {}> {
  public render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="about" component={About} />
        </Route>
      </Router>
    );
  }
}
