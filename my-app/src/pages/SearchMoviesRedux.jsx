import { Movies } from '../components/SearchMovies/Movies/Movies';
import { Search } from '../components/SearchMovies/Search/Search';
import { PaginatedItems } from '../components/SearchMovies/Paginator/Paginator';
import "./SearchMovies.scss"

export const SearchMovies = () => {
  // const movieSelector = useSelector(state => state.movie);
  // const itemsAll = Number(movieSelector.totalResults) || 1;
  // console.log(itemsAll)

  return (
    <>
      <div className="movie-container">
        <Search />
      </div>
      <div className="movies">
        <Movies />
      </div>
      <div className="paginator-container">
        <PaginatedItems itemsPerPage={10} /> 
      </div>
    </>
  );
}
