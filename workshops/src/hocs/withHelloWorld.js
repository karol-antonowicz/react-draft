import React from "react";

const withHelloWorld = Component => {
  const ComponentWithHelloWorld = props => {
    return <Component message="Hello World!" />;
  };

  return ComponentWithHelloWorld;
};

export default withHelloWorld;
