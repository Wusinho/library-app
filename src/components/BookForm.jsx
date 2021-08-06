import React from 'react';
import categories from './categories';

const handleInputChange = (e) => {
  console.log(e.target.value);
};

const BookForm = () => (
  <form>
    <div className="input-group mb-3">
      <input onChange={handleInputChange} type="text" className="form-control" placeholder="Book title" />
      <input onChange={handleInputChange} type="text" className="form-control" placeholder="Description" />
      <select onChange={handleInputChange} className="form-control" id="input3">
        <option defaultValue>Choose a Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.cat}>{cat.cat}</option>
        ))}
      </select>
      <button className="btn btn-success" type="submit" id="input5">Add Book</button>
    </div>
  </form>
);

export default BookForm;
