import { normalizedReviews } from '../../../mocks/normalized-mock.js';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewById } = reviewsSlice.selectors;
