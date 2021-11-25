
export function FavorMovie(props){
    return (
        <div>
            <h2>My favorite movie</h2>
            <div className="movies">
                <div className="poster"><img src={props.data.poster} alt="poster" target="_blank"/></div>
                <div className="cards">        
                    <h1> {props.data.name} </h1> 
                    <ul>
                        <li>Year: {props.data.year} </li> 
                        <li>Runtime: {props.data.runtime} </li> 
                        <li>Genre: {props.data.genre} </li> 
                        <li>Actors: {props.data.actors} </li> 
                    </ul>
                    <br/>
                    <div>{props.data.content}</div>
                </div>
            </div>
        </div>
    )
}    

const objMovie = {
    name: "Forrest Gump", 
    year: `1994`,
    runtime: `142 min`,
    genre: `Drama, Romance`,
    actors: `Tom Hanks, Robin Wright, Gary Sinise`,
    content:`Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.`,
    poster: `https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg`
}
