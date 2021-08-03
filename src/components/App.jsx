import React from 'react';
import BookForm from './BookForm';
import BookList from './BooksList';
import store from '../reducers/store';
import * as actions from '../actions/book';

const App = () => {
  store.dispatch(actions.bookAdded('book 1', 'description of book 1', 'horror'));
  store.dispatch(actions.bookAdded('book 2', 'description of book 2', 'action'));
  store.dispatch(actions.bookAdded('book 3', 'description of book 3', 'war'));

  return (
    <div>
      <BookForm />
      <BookList />
    </div>
  );
};

export default App;
