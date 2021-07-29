import { combineReducers } from 'redux';

import bookupdateReducer from './books';

const rootReducer = combineReducers({ bookupdateReducer });

export default rootReducer;
