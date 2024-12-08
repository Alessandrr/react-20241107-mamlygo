import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../constants.js';

export const getDishes = createAsyncThunk(
  'dishes/getDishes',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `${API_BASE_URL}/dishes?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('dishes/getDishes no data');
    }

    return result;
  }
);
