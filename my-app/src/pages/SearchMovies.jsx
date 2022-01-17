import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../store/actions/fetchMovie';
import { Search } from '../components/SearchMovies/Movies/Search/Search';
import "./SearchMovies.scss"

export const SearchMovies = () => {
  const dispatch = useDispatch();
  const movieSelector = useSelector(state => state.movie)
  dispatch(fetchMovie('terminator'));
  console.log(movieSelector)

  const handleEnter = (search, type) => {
    if (search.trim() === "") return;

  }
  return (
    <div className="movie-container">
      <Search enterHandler={handleEnter} />
    </div>
  );
}