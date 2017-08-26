import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import indexPage from './components/index';
import contactUsPage from './components/contuctUs';
import './assets/styles/index.less';

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Switch>
      <Route exact path="/" component={indexPage}/>
      <Route exact path="/contactUs" component={contactUsPage}/>
    </Switch>
  </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
