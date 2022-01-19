const initialState = [
  {id: 0, isCompleted: true, title: 'Изучить "React-redax"'},
  {id: 1, isCompleted: false, title: 'Изучить "Redux Toolkit"'},
  {id: 2, isCompleted: false, title: 'Изучить хук "createSlice"'},
  {id: 3, isCompleted: false, title: 'Написать пример с "createSlice"'},
];

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTES':
      return [
        ...state,
        {
          id: action.id,
          isCompleted: false,
          title: action.text,
        }
      ]
    case 'TOGGLE_NOTES':
      return state.map(item =>
        (item.id === action.id) ? 
        {...item, isCompleted: !item.isCompleted} : item,
      );
    case 'EDIT_NOTES':
      return state.filter(item =>
        (item.id !== action.id) 
      );
      case 'DELATE_NOTES':
        return state.filter(item =>
          (item.id !== action.id) 
        );
      case `LOAD_NOTES`:
        action.payload.map((item) => {
          item.id = Math.floor(Math.random()*(1000-100+1)+100);
          item.isCompleted = item.completed;
          item.title = `id=${item.id}, ${item.title}, ${item.isCompleted}`;
          delete item.completed;
          delete item.userId;
          return state;
        });
        return  [...state, ...action.payload]
    default:
      return state;
  }
};