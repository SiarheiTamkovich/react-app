import { loadMovieAction } from "./actions"
import { loadAboutMovieAction } from "./actions"

export const fetchMovie = (search) => {
  let url = `http://www.omdbapi.com/?apikey=6cb20a41&s=${search}&plot=full`;
  return function(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadMovieAction(json)))
  }
}

export const fetchAboutMovie = (id) => {
  let url = `http://www.omdbapi.com/?apikey=6cb20a41&i=${id}&plot=full`;
  return function(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadAboutMovieAction(json)))
  }
}
