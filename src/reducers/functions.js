import configureStoreApp from './configureStore';
import * as actions from '../actions/book';

const store = configureStoreApp();

export const removeBook = (id) => {
  store.dispatch(actions.bookRemoved(id));
};

export const addBook = (title, description, category) => {
  store.dispatch(actions.bookAdded(title, description, category));
};

export const getState = () => store.getState();
