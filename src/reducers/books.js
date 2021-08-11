import { v4 as uuidv4 } from 'uuid';
import * as actions from '../actions/booksActions';

// import { createSlice } from '@reduxjs/toolkit';

// export const bookSlice = createSlice({
//   name: 'book',
//   initialState: {
//     list: [],
//   },
//   reducers: {
//     addBook: (state, action) => {
//       state.list.push({
//         id: uuidv4().slice(0, 5),
//         title: action.payload.title,
//         description: action.payload.description,
//         category: action.payload.category,
//       });
//     },
//     removeBook: (state, action) => {
//       const list = state.list.filter((book) => book.id !== action.payload.id);
//       return { list };
//     },
//   },
// });

// export const { addBook, removeBook } = bookSlice.actions;

// export default bookSlice.reducer;

export default function reducer(state = [], action) {
  if (action.type === actions.CREATE_BOOK) {
    return [
      ...state,
      {
        id: uuidv4().slice(0, 5),
        title: action.payload.title,
        description: action.payload.description,
        category: action.payload.category,
      },
    ];
  }
  if (action.type === actions.REMOVE_BOOK) {
    return state.filter((book) => book.id !== action.payload.id);
  }
  return state;
}
