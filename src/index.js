import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// redux & router
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Switch, Route } from 'react-router'
import reducers from './reducers';
import logger from 'redux-logger';

import MainPage from './components/MainPage'
import Categories from './components/Categories'
import Item from './components/Item'
import Dealer from './components/Dealer'
import Text from './components/Text'
import Reference from './components/Reference'
import Service from './components/Service'
import About from './components/About'
import Support from './components/Support'
import AllNews from './components/Newsall'
import Docm from './components/docm'
import News from './components/News'
import Contacts from './components/contacts'


export const history = createHistory()
const middleware = routerMiddleware(history)

export const store = createStore(reducers, applyMiddleware(middleware),applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/category/:id" component={Categories} />
                <Route exact path="/item/:id" component={Item} />
                <Route exact path="/dealer" component={Dealer} />
                <Route exact path="/text" component={Text} />
                <Route exact path="/reference" component={Reference} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={Support} />
                <Route exact path="/AllNews" component={AllNews} />
                <Route exact path="/Docm/:id" component={Docm} />
                <Route exact path="/News/:id" component={News} />
                <Route exact path="/support" component={Contacts} />
            </Switch>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
