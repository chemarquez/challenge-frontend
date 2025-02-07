import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData, deleteTrack as apiDeleteTrack } from '../utils/api';

export const fetchTracks = createAsyncThunk('tracks/fetchTracks', async (jwtToken) => {
  const data = await fetchData('/api/tracks', jwtToken);
  return data;
});

export const deleteTrack = createAsyncThunk('tracks/deleteTrack', async ({ trackId, jwtToken }) => {
  await apiDeleteTrack(trackId, jwtToken);
  return trackId;
});

const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    tracks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTracks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTracks.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = action.payload;
      })
      .addCase(fetchTracks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTrack.fulfilled, (state, action) => {
        state.tracks = state.tracks.filter(track => track.id !== action.payload);
      });
  },
});

export default tracksSlice.reducer;
