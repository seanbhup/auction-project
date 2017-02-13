import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/stylesheets/styles.css';

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers/index.js";

const theStore = createStore(reducers);

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>,
  document.getElementById('root')
);
