import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import indexPage from './components/index';
import contactUsPage from './components/contuctUs';
import './assets/styles/index.less';
import {onServicesEnter} from './scripts/routeCallbacks.js';
import store from './store.js';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
          onServicesEnter();
          return indexPage();
        }}/>
        <Route path="/contactUs" component={contactUsPage}/>
      </Switch>
    </div>
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
