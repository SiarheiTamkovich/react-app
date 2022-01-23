import { useDispatch } from 'react-redux';
import { fetchMovie } from '../../../store/movie/movieFetchAction';
import "./Search.scss"

export const Search = () => {
  const dispatch = useDispatch();
  const url = new URL(window.location.href);

  const onClickSubmit = (event) => {
    const searchValue = event.target.parentNode.childNodes[0].value;
    if (searchValue.trim() === '') return;

    url.searchParams.set('title', searchValue);
    // modify the URL without reloading the page using the Location API
    // history.replaceState(data,title,url)
    window.history.replaceState({page:5},'JavaScript', url.href); 

    const formRadio = document.getElementById('radio');
    const typeValue = formRadio.elements['type'].value;

    dispatch(fetchMovie(searchValue, typeValue, 1));
//    console.log(window.location.href)
  }
  const onKeyUpEnter = (event) => {
    if (event.key === 'Enter') {
      const searchValue = event.target.value;
      if (searchValue.trim() === '') return;

      url.searchParams.set('title', searchValue);
      window.history.replaceState({page:5},'JavaScript', url.href); 

      const formRadio = document.getElementById('radio');
      const typeValue = formRadio.elements['type'].value;

      dispatch(fetchMovie(searchValue, typeValue, 1));
    }
  }
  const onChangeRadio = (event) => {
    const typeValue = event.target.value;
    window.history.replaceState({page:5},'JavaScript', url.href); 
    dispatch(fetchMovie(url.searchParams.get('title'), typeValue, 1));
  }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
            onKeyUp= {onKeyUpEnter} 
            type="search"
            placeholder="For example — terminator"
            defaultValue={url.searchParams.get('title')}
            autoFocus
        />
        <button
          className="btn btn-search-movie btn-outline-primary"
          onClick={onClickSubmit}
          >
          Search
        </button>
      </div>
      <form className='form-radio' id='radio'>
        <label className="label-btn-movie">
          <input className="with-gap form-check-input"
            onChange={onChangeRadio}
            type="radio"
            name="type"
            value="all"
          />
          <span>All</span>
        </label>
        <label className="label-btn-movie">
          <input className="with-gap form-check-input"
            onChange={onChangeRadio}
            type="radio"
            name="type"
            value="movie"
          />
          <span>Movies</span>
        </label>
        <label className="label-btn-movie">
          <input className="with-gap form-check-input"
            onChange={onChangeRadio}
            type="radio"
            name="type"
            value="series"
          />
          <span>Series</span>
        </label>
        <label className="label-btn-movie">
          <input className="with-gap form-check-input"
            onChange={onChangeRadio}
            type="radio"
            name="type"
            value="episode"
          />
          <span>Episode</span>
        </label>
      </form>
    </div>
  );
}