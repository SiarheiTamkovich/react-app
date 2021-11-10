import React from 'react';
import FavorMovie from "./Task/FavorMovie";

const detailsArray = [
  { name: "1", detail: "1" },
  { name: "2", detail: "2" },
  { name: "3", detail: "3" },
  { name: "4", detail: "4" },
  { name: "5", detail: "5" },
];

function App() {
  
  return (<div className='wrapper'>
    <h1>My favorite movie</h1>
    <FavorMovie data={detailsArray} />
  </div>
  )
}

export default App;
