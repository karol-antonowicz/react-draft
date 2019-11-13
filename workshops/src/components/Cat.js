import React from "react";
import styles from "./Cat.module.css";
import Counter from "./Counter";

export function CatName(props) {
  const a = 1;
  const b = 3;

  return (
    <div>
      <h1>{props.nameOfCat}</h1>
      <h2>
        a({a}) + b({b}) = {a + b}
      </h2>
    </div>
  );
}

const catSrc =
  "https://www.thesprucepets.com/thmb/jbD_0GJnIVGmnLve7QDe9hCDbPU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp33a24e10lxw100_Medium_214761-5af9d6d7875db900360440a7.jpg";

export const CatImage = props => {
  const { url } = props;

  if (url) {
    return <img src={url} />;
  } else {
    return (
      <img
        className={styles.catImage}
        src={
          "https://vignette.wikia.nocookie.net/theislands/images/4/48/Cat_Sil_Placeholder.jpg/revision/latest/scale-to-width-down/300?cb=20140101201417"
        }
      />
    );
  }
};

const showName = true;

const Cat = props => (
  <div className={styles.card}>
    <CatImage url={props.avatarUrl} />
    <Counter />
    {showName && <CatName nameOfCat={props.name} />}
  </div>
);

export default Cat;
