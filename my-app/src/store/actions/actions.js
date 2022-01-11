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