import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { notesReducer } from './reducers/notesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { movieReducer, movieAboutReducer } from './movie/movieReducer';

export const rootReducer = combineReducers({
  count: counterReducer,
  notes: notesReducer,
  movie: movieReducer,
  movie_about: movieAboutReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
