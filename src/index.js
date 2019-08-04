import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from "./store.js";
import { Provider } from "react-redux";
import {watcherSaga} from './sagas/counterSaga.js'
import { sagaMiddleware } from "./store";
const store1=store()
sagaMiddleware.run(watcherSaga);
ReactDOM.render(<Provider store={store1}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
