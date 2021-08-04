import { v4 as uuidv4 } from 'uuid';

import * as actions from '../actions/booksActions';

export default function reducer(state = [], action) {
  if (action.type === actions.CREATE_BOOK) {
    return [
      ...state,
      {
        id: uuidv4().slice(0, 6),
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
