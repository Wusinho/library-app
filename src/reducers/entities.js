import { combineReducers } from 'redux';
import reducer from './books';

export default combineReducers({
  books: reducer,
});
