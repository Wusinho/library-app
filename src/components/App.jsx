import React from 'react';
import BookForm from './BookForm';
import BookList from './BooksList';
import store from '../reducers/store';
import * as actions from '../actions/book';

const App = () => {
  store.dispatch(actions.bookAdded('book1'));
  store.dispatch(actions.bookRemoved('book2'));

  return (
    <div>
      <BookForm />
      <BookList />
    </div>
  );
};

export default App;
