import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/book';
import categories from './categories';
import Book from './Book';

const getID = (books) => books.id;

const BooksList = () => {
  const getBooks = useSelector((state) => state.entities.books);
  const dispatch = useDispatch();

  const handleBookRemove = (books) => {
    dispatch(actions.bookRemoved(getID(books)));
  };
  const setDescription = (e) => {
    console.log(e.target.value);
  };

  const displayBooks = getBooks.map((book) => (
    <Book
      key={book.id}
      handleClick={handleBookRemove}
      book={{
        id: book.id, title: book.title, category: book.category, percent: book.percent,
      }}
    />
  ));

  const filterCategories = (
    <div>
      <form onSubmit={(e) => setDescription(e.target.value)}>
        <select
          // value={category}
          className="form-control"
        >
          <option defaultValue disabled>Choose a Category</option>
          <option key="1"> All </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.cat}>
              {cat.cat}
            </option>
          ))}
        </select>
      </form>
    </div>
  );

  return (
    <div className="displayBooks">
      {filterCategories}
      {displayBooks}
    </div>
  );
};

export default BooksList;
