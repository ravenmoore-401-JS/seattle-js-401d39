import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// our thunk
import thunk from './middleware/thunk';

// brings in the official thunk library
// import thunk from 'redux-thunk';

import pokemonThings from './pokemon';

let reducers = combineReducers({ pokemonThings });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();