import { createAction, createReducer } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const bugAdded = createAction('bugAdded');
export const bugResolved = createAction('bugResolved');
export const bugRemoved = createAction('bugRemoved');

export default createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: uuidv4().slice(0, 6),
      description: action.payload.description,
      resolved: false,
    });
  },
});
