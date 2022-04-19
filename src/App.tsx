import React from 'react';
import logo from './logo.svg';
import './App.css';
import './djtracks/style.css';
//import TracklistTable from './djtracks/table';
import MainApp from './djtracks/main-app';

function App() {
  return (
    <div className="app-main">
    <MainApp/>
    </div>
    
  );
}

export default App;

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/