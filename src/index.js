import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { MuiThemeProvider } from '@material-ui/core/styles';

import configureStore from './store/configureStore';
import { INDEX } from './constants/routePaths';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import NotFound from './components/NotFound/NotFound';

import theme from './theme';

require('./favicon.ico');

const history = createHistory();
const store = configureStore({}, history);

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path={INDEX} component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>, document.getElementById('sunpo')
);
