import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { notesReducer } from './reducers/notesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
  count: counterReducer,
  notes: notesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
