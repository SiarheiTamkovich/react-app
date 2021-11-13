
export default function FavorMovie(props){
    return (
        <div>
            <h2>My favorite movie</h2>
            <div className="movies">
                <div className="poster"><img src={props.data.poster} alt="poster"/></div>
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
   