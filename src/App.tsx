import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './components/Home/home';
import { Foo } from './components/Foo/foo';

function App() {
  return (
    <div className='app'>
      <Router>
        <div className='page-content'>
          <nav className='uk-navbar-container' uk-navbar>
            <div className='uk-navbar-left'>
              <a className='uk-navbar-item uk-logo'>React Test</a>
              <ul className='uk-navbar-nav'>
                <li className='uk-active'>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/foo">foo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className='route-content'>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/foo" element={<Foo />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
