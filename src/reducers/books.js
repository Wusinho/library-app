import * as actions from '../actions/booksActions';

export default function reducer(state = [], action) {
  if (action.type === actions.CREATE_BOOK) {
    return [
      ...state,
      {
        id: (Math.random() * 10000),
        description: action.payload.description,
        resolved: false,
      },
    ];
  }
  if (action.type === actions.REMOVE_BOOK) {
    return state.filter((book) => book.id !== action.payload.id);
  }
  return state;
}
