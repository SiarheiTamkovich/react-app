import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../store/movie/movieFetchAction';
import { Search } from '../components/SearchMovies/Movies/Search/Search';
import { Loader } from '../components/SearchMovies/Loader/Loader'
import { Card } from '../components/SearchMovies/Movies/Card/Card';
import "./SearchMovies.scss"

export const SearchMovies = () => {
  const dispatch = useDispatch();
  const movieSelector = useSelector(state => state.movie)
  if (movieSelector.length === 0) {
    dispatch(fetchMovie('terminator'));
  }
  //console.log(movieSelector)
  
  const handleEnter = (search, type) => {
    if (search.trim() === "") return;
    dispatch(fetchMovie('matrix'))
    console.log(movieSelector)
  }
  
  return (
    <>
      <div className="movie-container">
        <Search enterHandler={handleEnter} />
      </div>
      <div className="movies">
        {!movieSelector.Response ? 
        (
          <Loader />
        ) : (
          <Card />
        )}
      </div>
    </>
    
  );
  
}