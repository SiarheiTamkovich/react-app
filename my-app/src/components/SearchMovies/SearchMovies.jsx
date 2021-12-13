import React, {useState, useEffect} from "react";
import { Movies } from "./Movies/Movies";
import { Search } from "./Movies/Search/Search";
import { Movie }  from "./Movies/Movie/Movie";
import "./SearchMovies.scss"

export function SearchMovies() {
    const [show, setShow] = useState('index');
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=6cb20a41&s=matrix')
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search ? data.Search : []);
                setLoading(false);
            });
    }, []); // for mount only

    const handleEnter = (search, type) => {
        if (search.trim() === "") return;
        setLoading(true);
        setShow('search');
        search = encodeURIComponent(search);
        let url = `http://www.omdbapi.com/?apikey=6cb20a41&s=${search}`;
        if (type !== 'all') {
            url = url + `&type=${type}`;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search ? data.Search : []);
                setLoading(false);
            });
    }

    const handleReadMore = (id) => {
        setLoading(true);
        setShow('movie');
        fetch(`http://www.omdbapi.com/?apikey=your-api-key&i=${id}&plot=full`)
            .then(response => response.json())
            .then(data => {
                setMovie(data.Title ? data : {});
                setLoading(false);
            });
    }

    return (
        <div className="movie-container">
            <Search enterHandler={handleEnter} />
            {loading ? (
                <div className="loader">Loading...</div>
            ) : show === 'movie' ? (
                <Movie {...movie} />
            ) : (
                <Movies
                    movies={movies}
                    readMoreHandler={handleReadMore}
                />
            )}
        </div>
    );
}
