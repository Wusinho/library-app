import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ book, handleClick }) => {
  const deleteBook = () => {
    handleClick(book);
  };

  return (
    <div className="card my-3" key={book.id}>
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{book.category}</h6>
        <p className="card-text">{book.description}</p>
        <span>ID: </span>
        <span>{book.id}</span>
      </div>
      <button
        onClick={() => deleteBook(book)}
        className="btn btn-danger m-2"
        type="button"
      >
        Remove Book
      </button>
    </div>
  );
};

Book.defaultProps = {
  book: {
    id: '',
    title: '',
    category: '',
  },
  handleClick: () => {},
};

Book.propTypes = {
  book: PropTypes.objectOf(Object),
  handleClick: PropTypes.func,
};

export default Book;
