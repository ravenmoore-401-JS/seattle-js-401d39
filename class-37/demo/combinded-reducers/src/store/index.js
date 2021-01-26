import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import votes from './votes';
import candidates from './candidates';

let reducers = combineReducers({ votes, candidates });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();