import React from 'react';
import { Router } from 'react-router';
import { render } from 'react-dom';
import { createHistory, useBasename } from 'history'
import { Provider } from 'react-redux';
import routes from './routes.js';
import configureStore from '../store/configureStore';
const history = useBasename(createHistory)({
    basename: '/'
});

let reduxState;
if (window.__REDUX_STATE__) {
    try {
        reduxState = JSON.parse(decodeURI(__REDUX_STATE__));
    } catch (e) {
    }
}

const store = configureStore(reduxState);

render(<Provider store={store}><Router history={history} routes={routes}/></Provider>, document.getElementById('react-app'));

