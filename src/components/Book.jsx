import PropTypes from 'prop-types';
import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import '../style/Book.css';

const Book = ({ book, handleClick }) => {
  const deleteBook = () => {
    handleClick(book);
  };

  return (
    <div className="card my-3 py-2 px-3" key={book.id}>
      <div className="row g-0">
        <div className="col-md-5 book__details px-3 py-2">
          <div className="card__details">
            <h3 className="mb-2 book__category">{book.category}</h3>
            <h2 className="book__title">{book.title}</h2>
            <address className="book__author">{book.author}</address>
          </div>
          <div className="card__options">
            <span className="span__1">Comments</span>
            <span className="span__2">
              <button className="btn__remove p-0" type="button" onClick={deleteBook}>Remove</button>
            </span>
            <span className="span__3">Edit</span>
          </div>
        </div>
        <div className="col-md-4 px-3 mid__card">
          <div className="d-flex">
            <div className="row ">
              <div className="card-body col-4 p-0">
                <ProgressBar
                  progress={book.progress}
                  radius={100}
                  initialAnimation
                  transition="2s ease"
                  strokeColor="#5d9cec"
                  className="book__progressbar"
                />
              </div>
              <div className="card-body col-8 p-0 mid__border">
                <h2 className="book__progress m-0">
                  {book.progress}
                  %
                </h2>
                <h4 className="book__completed">Completed</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card-body p-0 pb-2">
            <h5 className="book__chapter">Current Chapter</h5>
            <h6 className="chapter__number">
              Chapter
              {' '}
              {book.chapter}
            </h6>
          </div>
          <button className="btn__update" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
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
