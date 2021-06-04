import React from "react";

const Team = () => {
  const getdataHandler = async () => {
    const response = fetch("");
    const data = response.json();
  };

  return <button onClick={getdataHandler}></button>;
};

export default Team;
