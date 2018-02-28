import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// redux & router
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import logger from 'redux-logger';

import MainPage from './components/MainPage'
import Categories from './components/Categories'

export const history = createHistory()
const middleware = routerMiddleware(history)

export const store = createStore(reducers, applyMiddleware(middleware))

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div id="container">
                <MainPage/>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
