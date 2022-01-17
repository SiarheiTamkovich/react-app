import { loadMovieAction } from "./actions"

export const fetchMovie = (search) => {
  let url = `http://www.omdbapi.com/?apikey=6cb20a41&s=${search}`;
  return function(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadMovieAction(json)))
  }
}