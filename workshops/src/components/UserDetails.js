import React from "react";

const UserDetails = props => {
  const goBackHome = () => props.history.replace("/");

  return (
    <div>
      <h1>Users {props.match.params.id}</h1>
      <button onClick={goBackHome}>Go to home screen</button>
    </div>
  );
};

export default UserDetails;
