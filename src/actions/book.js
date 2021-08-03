import * as actions from './booksActions';

export const bugAdded = (description) => ({
  type: actions.BOOK_ADDED,
  payload: {
    description,
  },
});

export const bugResolved = (id) => ({
  type: actions.BOOK_REMOVED,
  payload: {
    id,
  },
});
