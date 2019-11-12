import React from "react";

export function CatName() {
  const a = 1;
  const b = 3;

  return (
    <div>
      <h1>Puszek</h1>
      <h2>
        a({a}) + b({b}) = {a + b}
      </h2>
    </div>
  );
}

const catSrc =
  "https://www.thesprucepets.com/thmb/jbD_0GJnIVGmnLve7QDe9hCDbPU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp33a24e10lxw100_Medium_214761-5af9d6d7875db900360440a7.jpg";

export const CatImage = () => {
  return <img src={catSrc} />;
};

const showName = true;

const Cat = () => (
  <div>
    <CatImage />
    {showName && <CatName />}
  </div>
);

export default Cat;