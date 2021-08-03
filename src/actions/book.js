import * as actions from './booksActions';

export const bookAdded = (description) => ({
  type: actions.BOOK_ADDED,
  payload: {
    description,
  },
});

export const bookRemoved = (id) => ({
  type: actions.BOOK_REMOVED,
  payload: {
    id,
  },
});
