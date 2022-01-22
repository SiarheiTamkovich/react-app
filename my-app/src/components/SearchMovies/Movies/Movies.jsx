import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchMovie } from '../../../store/movie/movieFetchAction';
import { Loader } from '../Loader/Loader';
import { Card } from "./Card/Card";

export function Movies() {
  const dispatch = useDispatch();
  const movieSelector = useSelector(state => state.movie)

  const location = useLocation();
  const search = location.search.slice(1);

  if (movieSelector.length === 0 && !search) dispatch(fetchMovie('terminator'));
  if (movieSelector.length === 0 && !!search) dispatch(fetchMovie(search));
  if (movieSelector.Response !== 'True') return <h1>Movie not found</h1>;
  
  return (
    <>
      {!movieSelector.Response ? <Loader /> : <Card />}
    </>
  );
}