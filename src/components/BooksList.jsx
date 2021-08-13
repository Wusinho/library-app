import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/book';
import categories from './categories';
import Book from './Book';
import '../style/Navbar.css';
import '../style/Body.css';

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
            progress: book.progress,
            chapter: book.chapter,
            author: book.author,
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
          progress: book.progress,
          chapter: book.chapter,
          author: book.author,
        }}
      />
    ));
  };

  const filterCategories = (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar__items">
        <h4 className="bookstore__name">Bookstore CMS</h4>
        <form>
          <select
            className="book__categories"
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
    </nav>
  );

  return (
    <div className="books">
      {filterCategories}
      <div className="book__container">
        {selectedCat(selectedCategory)}
      </div>
    </div>
  );
};

export default BooksList;
