import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Sandbox from './components/Sandbox.jsx';
import store from './modules';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <article>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sandbox" component={Sandbox} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </article>
      </Provider>
    );
  }
}
