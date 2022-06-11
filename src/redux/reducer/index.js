import {combineReducers} from 'redux';
import {accountReducer} from './account';

const reducer = combineReducers({
  accountReducer,
});

export default reducer;
