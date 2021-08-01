import { combineReducers } from 'redux';
import filterReducer from './filter';
import bookupdateReducer from './books';

const rootReducer = combineReducers({ bookupdateReducer, filterReducer });

export default rootReducer;
