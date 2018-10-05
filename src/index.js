import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import userReducer from './service/reducer/user-reducer';
import tokenReducer from "./service/reducer/token-reducer";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from "redux-thunk";
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import Helpers from "./service/Helpers";
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';

const allReducer = combineReducers({
  user: userReducer,
  token: tokenReducer
});


const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension(),
);


const store = createStore(
  allReducer, {
    user: Helpers.getLocalStorageData('_USER') ? Helpers.getLocalStorageData('_USER') : [],
    token: Helpers.getLocalStorageData('_token') ? Helpers.getLocalStorageData('_token') : '',
  },
  allStoreEnhancers
);
// console.log(store.getState());
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
// disable ServiceWorker
registerServiceWorker();
