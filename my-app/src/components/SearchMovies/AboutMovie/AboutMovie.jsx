import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { fetchAboutMovie } from '../../../store/movie/movieFetchAction';
import { Loader } from '../Loader/Loader';
import "./AboutMovie.scss";

export const AboutMovie = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const movieSelector = useSelector(state => state.movie_about);
  console.log(movieSelector)
  if (movieSelector.length === 0) {
    dispatch(fetchAboutMovie(id));
    return <h3><Loader /></h3>;
  }
  if (movieSelector.length !== 0 && movieSelector.imdbID !== id) {
    dispatch(fetchAboutMovie(id)); 
    return <h3><Loader /></h3>;
  }
  return (
    <div className="wrapper-about-film">
      <div className="title-about-film">
        <h1>{movieSelector.Title}</h1>
      </div>
      <div className="poster-about-film">
        {
          movieSelector.Poster !== 'N/A' ? 
            <img className="responsive-img" src={movieSelector.Poster} alt=""/> : 
            <img className="responsive-img" 
              src={`https://via.placeholder.com/300x430.png?text=${movieSelector.Title}`} alt=""/>
        }
      </div>
      <div className="text-about-film">
        <ul>
          <li>{movieSelector.Type}, Awards: {movieSelector.Awards}</li>
          <li>{movieSelector.Year}, Runtime: {movieSelector.Runtime}, 
            Country: {movieSelector.Country}</li>
          <li>Director: {movieSelector.Director}, Genre: {movieSelector.Genre}</li>
          <li>Actors: {movieSelector.Actors}</li>
        </ul>
        <p>{movieSelector.Plot}</p>
        <button 
          className="btn-return btn btn-outline-light"
          onClick={(event) => 
            {
              console.log(id)
            }} 
        >Add to favorite</button>
      </div>
    </div>
  );
}
