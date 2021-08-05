import React from 'react';
import store from '../reducers/index';

const BooksList = () => {
  const { books } = store.getState().entities;
  // console.log(books);
  return (
    books.map((book) => (
      <div className="card" key={book.id}>
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{book.category}</h6>
          <p className="card-text">{book.description}</p>
          <span>ID: </span>
          <span>{book.id}</span>
        </div>
      </div>
    ))
  );
};

export default BooksList;
