import { createSelector } from 'reselect';

const selectSearchState = (state) => state.search || {};

export const selectTrackData = createSelector(
  [selectSearchState],
  (searchState) => {
    return searchState.trackData || [];
  }
);
