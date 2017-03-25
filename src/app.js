import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
// Provider - takes our store and passes it around our components 
//  -> wrap entire App within this component, passing in our store as a prop
//  - uses 'context' feature and how we make container components
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as reducers from './reducers';
// routerReducer added to reducers object so it will be added to our store when we createStore()
reducers.routing = routerReducer;

import * as localStore from './localStore';

import App from './components/App';
import VisibleCards from './components/VisibleCards';

// combineReducers() - takes old state of cards and updates it using reducers we defined
// all components need to work with store: reading state or dispatching actions
//  - therefore, not great to have a global store
//  - only acessible within this file. thats bad; messy importing and passing as params
// Solution: we use 'context', a feature in react-redux
//  - map the state and dispatches to properties in actual components
const store = createStore(combineReducers(reducers), localStore.get());
// ALTERNATE WAYS TO CREATE STORE:
// no need for 'key: value' format since both have same name
// called when we use store.dispatch
// const store = Redux.createStore(Redux.combineReducers({
// 	   cards,
//     decks,
//     addingDeck
// })); 
//
// use Redux.combineReducers() instead - shorthanded way of doing below
// 	function (state, action) {
//     return {
//     	cards: cards(state.cards, action),
//     	decks: decks(state.decks, action),
//      addingDeck
//     };
// });

// when browser history changes, will sync history with the store
// and use new updates history instead of raw browserHistory
const history = syncHistoryWithStore(browserHistory, store);

function run() {
    let state = store.getState();
    localStore.set(state, ['decks', 'cards']);

console.log(state);

//ROUTING: /deck/:deckId
// deckId is actually fulfilled in Sidebar using state.property decks.id
// deckId is a var/token that stores the id and passes it to App and Toolbar

    ReactDOM.render(<Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <Route path='/deck/:deckId' component={VisibleCards} />
            </Route>
        </Router>
    </Provider>, document.getElementById('root'));
}

run();

// re-renders the page whenever state/store changes, so we can view it
store.subscribe(run);



















