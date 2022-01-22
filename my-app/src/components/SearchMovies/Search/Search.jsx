import { useDispatch } from 'react-redux';
import { fetchMovie } from '../../../store/movie/movieFetchAction';
import "./Search.scss"

export const Search = () => {
  const dispatch = useDispatch();
  const location = document.location;
    
  const onClickSubmit = (event) => {
  
    const searchValue = event.target.parentNode.childNodes[0].value;
    if (searchValue.trim() === '') return;
    const nextURL = window.location.href +'?'+ searchValue;
    //history.replaceState(data,title,url);
    window.history.replaceState({page:2},'JavaScript', nextURL); 
    
    dispatch(fetchMovie(searchValue));
    
    // modify the URL without reloading the page using the Location API
    // const nextURL = window.location.href +'?'+ searchValue;
    
    // window.location.href = nextURL;
    // window.location.assign(nextURL); 
    // window.location.replace(nextURL);
    console.log(window.location.href)
  }
  const onKeyUpEnter = (event) => {
    if (event.key === 'Enter') {
      const searchValue = event.target.value;
      if (searchValue.trim() === '') return;
      const search = '?'+ searchValue;
      const nextURL = window.location.href + search;
      window.location.href = nextURL;
      window.location.assign(nextURL); 
      window.location.replace(nextURL);
    }
  }
  const onChangeRadio = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
            onKeyUp= {onKeyUpEnter} 
            type="search"
            placeholder="For example — terminator"
            defaultValue={location.search.slice(1)}
            autoFocus
        />
        <button
          className="btn btn-search-movie btn-outline-primary"
          onClick={onClickSubmit}
          >
          Search
        </button>
      </div>
      <p>
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
          <span>Movies only</span>
        </label>
        <label className="label-btn-movie">
          <input className="with-gap form-check-input"
            onChange={onChangeRadio}
            type="radio"
            name="type"
            value="series"
          />
          <span>Series only</span>
        </label>
      </p>
    </div>
  );
}