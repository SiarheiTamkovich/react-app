import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReducer } from './notes/counterReducer';
import { notesReducer } from './notes/notesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { movieReducer, movieAboutReducer } from './movie/movieReducer';
import { favoriteReducer } from './movie/favoriteReducer';

export const rootReducer = combineReducers({
  count: counterReducer,
  notes: notesReducer,
  movie: movieReducer,
  movie_about: movieAboutReducer,
  movie_favorite: favoriteReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
