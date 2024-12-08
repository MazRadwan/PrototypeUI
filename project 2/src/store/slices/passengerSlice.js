import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { passengerService } from '../../services';

const initialState = {
  passengers: [],
  selectedPassenger: null,
  loading: false,
  error: null,
};

export const fetchPassengers = createAsyncThunk(
  'passengers/fetchPassengers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await passengerService.getPassengers();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPassengerById = createAsyncThunk(
  'passengers/fetchPassengerById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await passengerService.getPassengerById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const passengerSlice = createSlice({
  name: 'passengers',
  initialState,
  reducers: {
    clearSelectedPassenger: (state) => {
      state.selectedPassenger = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPassengers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPassengers.fulfilled, (state, action) => {
        state.loading = false;
        state.passengers = action.payload;
      })
      .addCase(fetchPassengers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPassengerById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPassengerById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPassenger = action.payload;
      })
      .addCase(fetchPassengerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedPassenger, clearError } = passengerSlice.actions;
export default passengerSlice.reducer;