import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CreateListing from "./containers/CreateListing.js"
import '../public/stylesheets/styles.css';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers/index.js";
import reduxPromise from "redux-promise";
import {Router, Route, hashHistory} from "react-router";

const theStore = applyMiddleware(reduxPromise)(createStore);


ReactDOM.render(
    <Provider store={theStore(reducers)}>
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="/create_listing" component={CreateListing} />
        </Router>
    </Provider>,
  document.getElementById('root')
);
