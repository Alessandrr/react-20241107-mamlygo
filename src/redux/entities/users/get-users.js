import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../constants.js';
import { selectUserIds } from './users-slice.js';

export const getUsers = createAsyncThunk(
  'users/get-users',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}/users`);

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('restaurants/getRestaurants no data');
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectUserIds(getState()).length === 0;
    },
  }
);
