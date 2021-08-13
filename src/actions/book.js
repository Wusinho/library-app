import * as actions from './booksActions';

export const bookAdded = (title, category) => ({
  type: actions.CREATE_BOOK,
  payload: {
    title,
    category,
  },
});

export const bookRemoved = (id) => ({
  type: actions.REMOVE_BOOK,
  payload: {
    id,
  },
});

export const changeFilter = (category) => ({
  type: actions.CHANGE_FILTER,
  payload: category,
});
