import { Routes, Route, Link } from 'react-router-dom';

import { Home }         from "./pages/Home";
import { About }        from "./pages/About";
import { Blog }         from "./pages/Blog";
import { Todo }         from "./pages/Todo";
import { Toby }         from "./pages/Toby";
import { ItStep }       from './pages/ItStep';
import { Page404 }      from "./pages/Page404";

import { Layout }       from "./components/Layout";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="todo" element={<Todo />} />
          <Route path="toby" element={<Toby />} />
          <Route path="it-step" element={<ItStep />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}


