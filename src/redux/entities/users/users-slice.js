import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../mocks/normalized-mock.js';

const initialState = {
  ids: normalizedUsers.map((user) => user.id),
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectUserIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
  },
});

export const { selectUserById, selectUserIds } = usersSlice.actions;
