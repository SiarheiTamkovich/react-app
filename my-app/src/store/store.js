import { combineReducers, createStore } from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { notesReducer } from './reducers/notesReducer';

export const rootReducer = combineReducers({
  count: counterReducer,
  notes: notesReducer,
});

export const store = createStore(rootReducer);

