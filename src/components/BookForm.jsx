import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdded } from '../actions/book';
import categories from './categories';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      bookAdded({
        title,
        description,
        category,
      }),
    );
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group mb-3">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="form-control"
          placeholder="Book title"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          className="form-control"
          placeholder="Description"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="form-control"
          id="input3"
        >
          <option defaultValue>Choose a Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.cat}>
              {cat.cat}
            </option>
          ))}
        </select>
        <button className="btn btn-success" type="submit" id="input5">
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;
