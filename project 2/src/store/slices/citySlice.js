import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cityService } from '../../services';

const initialState = {
  cities: [],
  selectedCity: null,
  loading: false,
  error: null,
};

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async (_, { rejectWithValue }) => {
    try {
      const response = await cityService.getCities();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCityById = createAsyncThunk(
  'cities/fetchCityById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await cityService.getCityById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    clearSelectedCity: (state) => {
      state.selectedCity = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCityById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCityById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCity = action.payload;
      })
      .addCase(fetchCityById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedCity, clearError } = citySlice.actions;
export default citySlice.reducer;