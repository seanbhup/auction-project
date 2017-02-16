// MODULES
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers/index.js";
import reduxPromise from "redux-promise";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
// COMPONENTS
import App from './App';
import CreateListing from "./containers/CreateListing.js"
import Login from "./containers/Login.js";
import Register from "./containers/Register.js";
// STYLES
import '../public/stylesheets/styles.css';



const theStore = applyMiddleware(reduxPromise)(createStore);


ReactDOM.render(
    <Provider store={theStore(reducers)}>
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="/create_listing" component={CreateListing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {/* <Route path="/search:term" component={Search} /> */}
            {/* this.props.children if you want to add indexroute */}
        </Router>

    </Provider>,
  document.getElementById('root')
);
