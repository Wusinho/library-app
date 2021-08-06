import configureStoreApp from './configureStore';
import * as actions from '../actions/book';

const store = configureStoreApp();

const removeBook = (id) => {
  store.dispatch(actions.bookRemoved(id));
};

export default removeBook;
