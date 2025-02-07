import { configureStore } from '@reduxjs/toolkit';
import  tracksReducer  from './trackslice';

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});

export default store;
