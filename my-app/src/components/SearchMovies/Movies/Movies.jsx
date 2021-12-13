import { Card } from "./Card/Card";
import "./Movies.scss";

export function Movies(props) {
  return (
      <div className="movies">
          {props.movies.length ? (
              props.movies.map(movie => 
                  <Card
                      key={movie.imdbID}
                      readMoreHandler={props.readMoreHandler}
                      {...movie}
                  />
              )
          ) : (
              <p>Nothing found</p>
          )}
      </div>
  );
}