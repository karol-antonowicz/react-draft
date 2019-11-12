import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Cat from "./components/Cat";
import { Content } from "./components/Content";

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
