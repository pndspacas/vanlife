import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import './styles/home.css';
import './styles/about.css';

const App = () => {
  return (
    <BrowserRouter>
      <nav className="home-nav">
        <Link to={'/'}>
          <h1 className="home-link">#VANLIFE</h1>
        </Link>
        <ul className="links-container">
          <Link to={'/about'}>
            <li className="nav-link">About</li>
          </Link>
          <Link to={'/vans'}>
            <li className="nav-link">Vans</li>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <footer>
        <p>Ⓒ 2024 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  );
};

export default App;
