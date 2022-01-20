import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { fetchAboutMovie } from '../../../../store/actions/fetchMovie';
import "./Movie.scss";

export const Movie = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const movieSelector = useSelector(state => state.movie_about);

  if (movieSelector.length === 0) {
      dispatch(fetchAboutMovie(id));
  } 

  if (movieSelector.imdbID !== id) {
    dispatch(fetchAboutMovie(id));
    return <p>{movieSelector.imdbID}</p>;
  }

  console.log(id)
  console.log(movieSelector.imdbID)
  console.log(movieSelector)

  if (movieSelector.imdbID === id) {
    return <p>{movieSelector.imdbID}</p>;
  }
  
  return <p>{movieSelector.imdbID}</p>;
}

// function renderMovieAbout(movie) {
//   return <p>{movie.imdbID}</p>
// }