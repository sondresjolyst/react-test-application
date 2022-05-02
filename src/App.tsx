import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logo from './logo.svg'
import './App.css';

function Home() {
  return (
    <h1>test</h1>
  )
}

function Foo() {
  return (
    <h2>foo</h2>
  )
}

function App() {
  return (
    <div className='app'>
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >       Learn React     </a>
      </header>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/foo">foo</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/foo" element={<Foo />}></Route>
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
