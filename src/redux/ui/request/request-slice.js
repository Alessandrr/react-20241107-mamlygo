import { createSlice } from '@reduxjs/toolkit';

export const requestSlice = createSlice({
  name: 'request',
  initialState: {},
  selectors: {
    selectRequestStatusById: (state, id) => state[id],
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state, { meta }) => {
          state[meta.requestId] = 'pending';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { meta }) => {
          state[meta.requestId] = 'rejected';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, { meta }) => {
          state[meta.requestId] = 'fulfilled';
        }
      ),
});

export const { selectRequestStatusById } = requestSlice.selectors;
