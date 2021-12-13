import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/todo">ToDo</Link>
        <Link to="/toby">ToBy</Link>
        <Link to="/it-step">It_Step</Link>
        <Link to="/search-movies">Search_Movies</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </header>
      
      <main className="container">
            <Outlet />
      </main>
      <footer className="container">By Siarhei Tamkovich 2021</footer>
    </>
  )
}

export {Layout}