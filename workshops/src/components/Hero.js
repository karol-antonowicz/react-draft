import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../logo.svg";
import Counter from "./Counter";
import withHelloWorld from "../hocs/withHelloWorld";

export function Hero(props) {
  return (
    <header className="App-header">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        onClick={() => {
          props.history.push("/asdasdasdad");
        }}
      />
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
      <Counter />
    </header>
  );
}

export default withHelloWorld(withRouter(Hero));
