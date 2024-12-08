import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { aircraftService } from '../../services';

const initialState = {
  aircraft: [],
  selectedAircraft: null,
  loading: false,
  error: null,
};

export const fetchAircraft = createAsyncThunk(
  'aircraft/fetchAircraft',
  async (_, { rejectWithValue }) => {
    try {
      const response = await aircraftService.getAircraft();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAircraftById = createAsyncThunk(
  'aircraft/fetchAircraftById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await aircraftService.getAircraftById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const aircraftSlice = createSlice({
  name: 'aircraft',
  initialState,
  reducers: {
    clearSelectedAircraft: (state) => {
      state.selectedAircraft = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAircraft.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAircraft.fulfilled, (state, action) => {
        state.loading = false;
        state.aircraft = action.payload;
      })
      .addCase(fetchAircraft.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAircraftById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAircraftById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedAircraft = action.payload;
      })
      .addCase(fetchAircraftById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedAircraft, clearError } = aircraftSlice.actions;
export default aircraftSlice.reducer;