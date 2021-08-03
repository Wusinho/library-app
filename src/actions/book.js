import * as actions from './booksActions';

export const bookAdded = (description) => ({
  type: actions.CREATE_BOOK,
  payload: {
    description,
  },
});

export const bookRemoved = (id) => ({
  type: actions.REMOVE_BOOK,
  payload: {
    id,
  },
});
