import * as actions from './booksActions';

export const bookAdded = (title, description, category) => ({
  type: actions.CREATE_BOOK,
  payload: {
    title,
    description,
    category,
  },
});

export const bookRemoved = (id) => ({
  type: actions.REMOVE_BOOK,
  payload: {
    id,
  },
});
