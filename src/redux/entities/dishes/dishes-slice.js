import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getDish } from './get-dish.js';
import { getDishes } from './get-dishes.js';

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

export const { selectById: selectDishById } = entityAdapter.getSelectors(
  (state) => state.dishes
);
