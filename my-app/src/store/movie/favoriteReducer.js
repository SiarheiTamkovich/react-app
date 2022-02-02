const initialState = [];

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, {...action.payload}]; 
    default:
      return state;
  }
}