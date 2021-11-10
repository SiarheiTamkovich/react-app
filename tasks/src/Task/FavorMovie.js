
export default function FavorMovie(props){
    console.log(props.data)
    return (
        <>
         <h1> {props.data.name} </h1> 
         <div> {props.data.year} </div> 
        </>
    )
}    
   