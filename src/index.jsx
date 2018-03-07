import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';

import {
  Home,
  User
} from './containers';
import store from './commons/store';
import { sampleTheme } from './commons/style';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(sampleTheme)}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root')
);