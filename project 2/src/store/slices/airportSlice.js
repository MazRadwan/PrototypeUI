import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { airportService } from '../../services';

const initialState = {
  airports: [],
  selectedAirport: null,
  loading: false,
  error: null,
};

export const fetchAirports = createAsyncThunk(
  'airports/fetchAirports',
  async (_, { rejectWithValue }) => {
    try {
      const response = await airportService.getAirports();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAirportById = createAsyncThunk(
  'airports/fetchAirportById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await airportService.getAirportById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const airportSlice = createSlice({
  name: 'airports',
  initialState,
  reducers: {
    clearSelectedAirport: (state) => {
      state.selectedAirport = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAirports.fulfilled, (state, action) => {
        state.loading = false;
        state.airports = action.payload;
      })
      .addCase(fetchAirports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAirportById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAirportById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedAirport = action.payload;
      })
      .addCase(fetchAirportById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedAirport, clearError } = airportSlice.actions;
export default airportSlice.reducer;