import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/todo">ToDo</Link>
        <Link to="/toby">ToBy</Link>
        <Link to="/it-step">ItStep</Link>
        <Link to="/search-movies">SearchMovies</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </header>
      
      <main className="container">
            <Outlet />
      </main>
      <footer className="footer-container">© 2021 by Siarhei Tamkovich </footer>
    </>
  )
}

export {Layout}