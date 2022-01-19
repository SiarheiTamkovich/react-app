const initialState = [];

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MOVIE':
      return {...state, ...action.payload}; 
    default:
      return state;
  }
}