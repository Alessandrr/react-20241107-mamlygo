import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './get-restaurants.js';
import { getRestaurant } from './get-restaurant.js';

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

export const {
  selectIds: selectRestaurantIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors((state) => state.restaurants);
