import { combineReducers } from 'redux';
import reducer from './books';
import filterReducer from './filter';

export default combineReducers({
  books: reducer,
  filter: filterReducer,
});
