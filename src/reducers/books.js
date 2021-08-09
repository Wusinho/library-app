import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    list: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.list.push({
        id: uuidv4().slice(0, 5),
        name: action.payload.name,
        description: action.payload.description,
        category: action.payload.category,
      });
    },
    removeBook: (state, action) => {
      state.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
