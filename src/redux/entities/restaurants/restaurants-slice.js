import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../mocks/normalized-mock.js';

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map((item) => item.id),
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: initialState,
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
});

export const { selectRestaurantIds, selectRestaurantById } =
  restaurantsSlice.selectors;
