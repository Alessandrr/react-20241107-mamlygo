import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantIds } from './restaurants-slice.js';
import { API_BASE_URL } from '../../constants.js';

export const getRestaurants = createAsyncThunk(
  'restaurants/get-restaurants',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}/restaurants`);

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('restaurants/getRestaurants no data');
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectRestaurantIds(getState()).length === 0;
    },
  }
);
