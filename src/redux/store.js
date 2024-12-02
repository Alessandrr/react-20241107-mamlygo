import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './entities/restaurants/restaurants-slice.js';
import { dishesSlice } from './entities/dishes/dishes-slice.js';
import { reviewsSlice } from './entities/reviews/reviews-slice.js';

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
  },
});
