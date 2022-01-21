const loadMovieAction = (payload) => ({
  type: 'LOAD_MOVIE',
  payload,
})

export const fetchMovie = (search) => {
  let url = `http://www.omdbapi.com/?apikey=6cb20a41&s=${search}&plot=full`;
  return function(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadMovieAction(json)))
  }
}

const loadAboutMovieAction = (payload) => ({
  type: 'LOAD_ABOUT_MOVIE',
  payload,
})

export const fetchAboutMovie = (id) => {
  let url = `http://www.omdbapi.com/?apikey=6cb20a41&i=${id}&plot=full`;
  return function(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadAboutMovieAction(json)))
  }
}
