import { normalizedDishes } from '../../../mocks/normalized-mock.js';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: initialState,
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishById } = dishesSlice.selectors;
