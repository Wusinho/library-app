import React from 'react';
import categories from './categories';

const BookForm = () => (
  <form>
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Book title" />
      <input type="text" className="form-control" placeholder="Description" />
      <select className="form-control" id="input3">
        <option defaultValue>Choose a Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value="cat">{cat.cat}</option>
        ))}
      </select>
      <button className="btn btn-success" type="button" id="input5">Add Book</button>
    </div>
  </form>
);

export default BookForm;
