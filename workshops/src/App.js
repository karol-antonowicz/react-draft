import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Cat from "./components/Cat";
import { Content } from "./components/Content";
import FormExample from "./components/FormExample";

function App() {
  return (
    <div className="App">
      <Hero />
      <FormExample />
      <Content />
      <Cat
        name="Puszek"
        avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmdG435HxyF0e1DP1IBVos10zTwuNJ0p9M_iYDzlYWup6AgfV6w&s"
      />
      <Cat name="Okruszek" />
      <Cat name="Kulka" />
    </div>
  );
}

export default App;
