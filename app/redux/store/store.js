/* eslint-disable prettier/prettier */
// eslint-disable-next-line semi
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux'

import { appReducer } from '../reducers/AppReducers';
const thunkMiddleware = require('redux-thunk').thunk


const rootReducer = combineReducers({
    appReducer,
});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}
export default configureStore;