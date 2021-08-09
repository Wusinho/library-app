// import { v4 as uuidv4 } from 'uuid';
import { createSlice, createSelector } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    list: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.list.push({
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        category: action.payload.category,
      });
    },
  },
});

export const getBookList = () => createSelector(
  (state) => state.entities.bookSlice.list,
);

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
