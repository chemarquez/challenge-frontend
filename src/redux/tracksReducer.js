const initialState = {
    tracks: [],
    loading: false,
    error: null,
  };
  
  export const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TRACKS_START':
        return { ...state, loading: true };
      case 'FETCH_TRACKS_SUCCESS':
        return { ...state, loading: false, tracks: action.payload };
      case 'FETCH_TRACKS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'DELETE_TRACK':
        return { ...state, tracks: state.tracks.filter(track => track.id !== action.payload) };
      default:
        return state;
    }
  };
  