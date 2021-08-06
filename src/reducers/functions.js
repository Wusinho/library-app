import configureStoreApp from './configureStore';
import * as actions from '../actions/book';

const store = configureStoreApp();

export const removeBook = (id) => {
  store.dispatch(actions.bookRemoved(id));
};

export const addBook = (book) => {
  store.dispatch(actions.bookAdded(book));
};
