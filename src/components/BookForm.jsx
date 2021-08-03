import React from 'react';

function BookForm() {
  return (
    <form>
      <div className="input-group mb-3">
        <input type="text" className="form-control" />
        <select className="form-control" id="input3">
          <option selected>Choose a Category</option>
          <option>Action</option>
          <option>Biography</option>
          <option>History</option>
          <option>Horror</option>
          <option>Kids</option>
          <option>Learning</option>
          <option>Sci-Fi</option>
        </select>
        <button className="btn btn-success" type="button" id="input5">Add Book</button>
      </div>
    </form>
  );
}

export default BookForm;
