import { Routes, Route, Link } from 'react-router-dom';

import { Homepage }     from "./pages/Homepage";
import { About }        from "./pages/Aboutpage";
import { Blogpage }     from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";

import { Layout }       from "./components/Layout";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blogpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  )
}


// export function App() {
  
//   return (<div className='wrapper'>
//     <FavorMovie data={objMovie}/>
//     <QuoteDay data={quote}/>
//     <Time />
//     <FootballClub />
//     </div>
//   )
// }
// import { FavorMovie } from "./components/FavorMovie.jsx";
// import { QuoteDay } from "./components/QuoteDay.jsx";
// import { Time } from "./components/Time.jsx";
// import { FootballClub } from './components/FootballClub.jsx'; 
