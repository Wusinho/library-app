// import { useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'react-redux';
// import { removeBook } from '../reducers/functions';

// const getID = (books) => books.id;

const BooksList = () => {
  const books = useSelector((state) => state.entities.books);
  console.log(books);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default BooksList;
