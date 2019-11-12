import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Hero() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
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
  );
}

function Content() {
  return (
    <div>
      <p>Hello!</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Hero />
      <Content />
    </div>
  );
}

export default App;
