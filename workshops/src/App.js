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
      <p>Hello! 1 + 2 = {1 + 2}</p>
    </div>
  );
}

function CatName() {
  return <h1>Puszek</h1>;
}

const CatImage = () => {
  return (
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBjnCHmg6X7YGEZ4vY_sYT1bcYtwzFYDFujnWyyOhCmzuV_421w&s" />
  );
};

const showName = true;

const Cat = () => (
  <div>
    <CatImage />
    {showName && <CatName />}
  </div>
);

function App() {
  return (
    <div className="App">
      <Hero />
      <Content />
      <Cat />
    </div>
  );
}

export default App;
