import React from "react";

const Fatal = ({ mensaje }) => {
  return (
    <div className="center">
      <h2>Error</h2>
      <p>{mensaje}</p>
    </div>
  );
};

export default Fatal;
