export const increaseAction = (payload) => ({type: 'increase', payload});
export const decreaseAction = () => ({type: 'decrease'});

let nextNoteId = 4;
export const addNotesAction = text => ({
  type: 'ADD_NOTES', 
  id: nextNoteId++,
  text,
});

export const toggleAction = (id) => ({
  type: 'TOGGLE_NOTES',
  id,
});

export const editAction = (id) => ({
  type: 'EDIT_NOTES',
  id,
})

export const delateAction = (id) => ({
  type: 'DELATE_NOTES',
  id,
})

export const loadAction = (payload) => ({
  type: 'LOAD_NOTES',
  payload,
})

export const loadMovieAction = (payload) => ({
  type: 'LOAD_MOVIE',
  payload,
})

export const loadAboutMovieAction = (payload) => ({
  type: 'LOAD_ABOUT_MOVIE',
  payload,
})