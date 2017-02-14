import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/stylesheets/styles.css';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers/index.js";
import reduxPromise from "redux-promise";

const theStore = applyMiddleware(reduxPromise)(createStore);


ReactDOM.render(
    <Provider store={theStore(reducers)}>
        <App />
    </Provider>,
  document.getElementById('root')
);
