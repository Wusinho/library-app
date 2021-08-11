import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/book';
import categories from './categories';
import Book from './Book';

const getID = (books) => books.id;

const BooksList = () => {
  const getBooks = useSelector((state) => state.entities.books);
  const selectedCategory = useSelector((state) => state.entities.filter);
  const dispatch = useDispatch();

  const handleBookRemove = (books) => {
    dispatch(actions.bookRemoved(getID(books)));
  };

  const handleFilterCHange = (e) => {
    dispatch(actions.changeFilter(e.target.value));
  };

  const selectedCat = (category) => {
    if (category === 'All') {
      return getBooks.map((book) => (
        <Book
          key={book.id}
          handleClick={handleBookRemove}
          book={{
            id: book.id,
            title: book.title,
            description: book.description,
            category: book.category,
            percent: book.percent,
          }}
        />
      ));
    }
    const books = getBooks.filter((book) => book.category === category);
    return books.map((book) => (
      <Book
        key={book.id}
        handleClick={selectedCategory}
        book={{
          id: book.id,
          title: book.title,
          description: book.description,
          category: book.category,
          percent: book.percent,
        }}
      />
    ));
  };

  const filterCategories = (
    <div>
      <form>
        <select
          className="form-control"
          onChange={(e) => handleFilterCHange(e)}
        >
          <option defaultValue disabled>
            Choose a Category
          </option>
          <option key="0"> All </option>
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
      {selectedCat(selectedCategory)}
    </div>
  );
};

export default BooksList;
