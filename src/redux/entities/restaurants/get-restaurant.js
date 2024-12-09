import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantById } from './restaurants-slice.js';
import { API_BASE_URL } from '../../constants.js';

export const getRestaurant = createAsyncThunk(
  'restaurants/getRestaurant',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}/restaurant/${id}`);

    const result = await response.json();

    if (!result) {
      return rejectWithValue('restaurants/getRestaurants no data');
    }

    return result;
  },
  {
    condition: (id, { getState }) => {
      return selectRestaurantById(getState(), id) === undefined;
    },
  }
);
