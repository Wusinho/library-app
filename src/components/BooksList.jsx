import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/book';

const getID = (books) => books.id;

const BooksList = () => {
  const getBooks = useSelector((state) => state.entities.books);
  const dispatch = useDispatch();

  const handleBookRemove = (books) => {
    dispatch(actions.bookRemoved(getID(books)));
  };

  const displayBooks = getBooks.map((book) => (
    <div className="card my-3" key={book.id}>
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{book.category}</h6>
        <p className="card-text">{book.description}</p>
        <span>ID: </span>
        <span>{book.id}</span>
      </div>
      <button
        onClick={() => handleBookRemove(book)}
        className="btn btn-danger m-2"
        type="button"
      >
        Remove Book
      </button>
    </div>
  ));
  const filterCategories = (
    <div>
      hello
    </div>
  );

  return (
    <div>
      {filterCategories}
      {displayBooks}
    </div>
  );
};

export default BooksList;
