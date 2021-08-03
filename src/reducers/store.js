import { createStore } from 'redux';
import reducer from './books';

const store = createStore(
  reducer,
);

export default store;
