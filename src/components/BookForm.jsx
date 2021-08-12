import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import categories from './categories';
import * as actions from '../actions/book';
import '../style/BookAdd.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(actions.bookAdded(
      title,
      category,
    ));
    setTitle('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="book__addition">
      <div className="input-group mb-3">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="form-control me-3"
          placeholder="Book title"
          required
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="form__input me-3"
          id="input3"
          required
        >
          <option defaultValue required>Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.cat}>
              {cat.cat}
            </option>
          ))}
        </select>
        <button className="btn btn-primary btn__addBook" type="submit" id="input5">
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;
