import * as actions from '../actions/booksActions';

export default function reducer(state = [], action) {
  if (action.type === actions.BOOK_ADDED) {
    return [
      ...state,
      {
        id: (Math.random() * 10000),
        description: action.payload.description,
        resolved: false,
      },
    ];
  }
  if (action.type === actions.BOOK_REMOVED) {
    return state.filter((book) => book.id !== action.payload.id);
  }
  return state;
}
