import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.scss';
import {Home} from './components/Home/home';
import {Foo} from './components/Foo/foo';

/**
 * @return {any} This will return App page.
 */
function App(): any {
  return (
    <div className="app">
      <Router>
        <div className="page-content">
          <nav className="uk-navbar-container" uk-navbar="true">
            <div className="uk-navbar-left">
              <a className="uk-navbar-item uk-logo">React Test</a>
              <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/foo">foo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="route-content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/foo" element={<Foo />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
      <footer
        className="uk-section-default
      uk-padding uk-padding-remove-bottom"
      >
        <div className="uk-text-center">
          <p>React-Test 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
