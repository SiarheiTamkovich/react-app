import "./Movie.scss";

export function Movie(props) {
  if (!props.Title) {
    return <p>Movie not found</p>
  }
  const {
    Title,
    Year,
    Runtime,
    Genre,
    Actors,
    Plot,
    Poster
  } = props;
  const text = Title.replace(/^a-z0-9 /i, '').replace(/\s/, '+');
  return (
    <div className="wrapper-about-film">
      <div className="title-about-film">
        <h1>{Title}</h1>
      </div>
      <div className="poster-about-film">
        {
          Poster !== 'N/A' ? <img className="responsive-img" src={Poster} alt=""/> : 
            <img className="responsive-img" src={`https://via.placeholder.com/300x430.png?text=${text}`} alt=""/>
        }
      </div>
      <div className="text-about-film">
        <ul>
          <li>Year: {Year}</li>
          <li>Runtime: {Runtime}</li>
          <li>Genre: {Genre}</li>
          <li>Actors: {Actors}</li>
        </ul>
        <p>{Plot}</p>
        <button 
          className="btn-return btn btn-outline-light"
          onClick={(event) => {
            console.log(props)
          }} 
        >Add to favorite</button>
      </div>
    </div>
  );
}