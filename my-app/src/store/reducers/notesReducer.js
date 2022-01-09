const initialState = [
  {id: 0, isCompleted: true, title: 'Изучить "React-redax"'},
  {id: 1, isCompleted: false, title: 'Изучить "Redux Toolkit"'},
  {id: 2, isCompleted: false, title: 'Изучить хук "createSlice"'},
  {id: 3, isCompleted: false, title: 'Написать пример с "createSlice"'},
];

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTES':
//      console.log(state)
      return [
        ...state,
        {
          id: action.id,
          isCompleted: false,
          title: action.text,
        }
      ]
    default :
      return state;
  }
};