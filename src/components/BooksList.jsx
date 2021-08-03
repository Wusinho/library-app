import React, { useEffect } from 'react';
import store from '../reducers/store';
import * as actions from '../actions/book';

const BooksList = () => {
  store.dispatch(actions.bookAdded('book 1', 'description of book 1', 'horror'));
  store.dispatch(actions.bookAdded('book 2', 'description of book 2', 'action'));
  store.dispatch(actions.bookAdded('book 3', 'description of book 3', 'war'));

  useEffect(() => {

  }, []);

  const getBooks = (store.getState());

  return (
    getBooks.map((book) => (
      <div className="card" key={book.id}>
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{book.category}</h6>
          <p className="card-text">{book.description}</p>
        </div>
      </div>
    ))
  );
};

export default BooksList;
