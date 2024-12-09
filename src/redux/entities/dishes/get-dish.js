import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../constants.js';
import { selectDishById } from './dishes-slice.js';

export const getDish = createAsyncThunk(
  'dishes/getDish',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}/dish/${id}`);

    const result = await response.json();

    if (!result) {
      return rejectWithValue('dishes/getDish no data');
    }

    return result;
  },
  {
    condition: (id, { getState }) => {
      return selectDishById(getState(), id) === undefined;
    },
  }
);
