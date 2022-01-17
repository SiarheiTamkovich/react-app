import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { notesReducer } from './reducers/notesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { movieReducer } from './reducers/movieReducer';

export const rootReducer = combineReducers({
  count: counterReducer,
  notes: notesReducer,
  movie: movieReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
