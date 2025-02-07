import { createAsyncThunk } from '@reduxjs/toolkit';
import { postData } from '../utils/api';

export const fetchTracks = createAsyncThunk(
  'search/fetchTracks',
  async (isrcCode) => {
    const response = await postData(`/api/track/createTrack?isrc=${isrcCode}`);
    return response;
  }
);
