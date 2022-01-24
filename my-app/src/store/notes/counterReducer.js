const initialValue = {
  value: 0,
}

export const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        value: state.value + action.payload
      }
    case 'decrease':
      return {
        ...state,
        value: state.value - 1
      }
    default :
      return state;
  }
}