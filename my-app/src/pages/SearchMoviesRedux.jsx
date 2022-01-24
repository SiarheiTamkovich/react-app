import { Movies } from '../components/SearchMovies/Movies/Movies';
import { Search } from '../components/SearchMovies/Search/Search';
import { PaginatedItems } from '../components/SearchMovies/Paginator/Paginator';
import "./SearchMovies.scss"

export const SearchMovies = () => {
  return (
    <>
      <div className="movie-container">
        <Search />
      </div>
      <div className="movies">
        <Movies />
      </div>
      <div className="container-paginator">
        <PaginatedItems itemsPerPage={10} itemsAll={200}/>
      </div>
    </>
  );
}
