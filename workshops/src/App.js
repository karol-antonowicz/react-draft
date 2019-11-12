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

const catSrc =
  "https://www.thesprucepets.com/thmb/jbD_0GJnIVGmnLve7QDe9hCDbPU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp33a24e10lxw100_Medium_214761-5af9d6d7875db900360440a7.jpg";

const CatImage = () => {
  return <img src={catSrc} />;
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
