import React from "react";

const Die = ({ number, isHold, hanldeHold }) => {
  const dieStyles = {
    backgroundColor: isHold ? "#50df8c" : "white",
  };

  return (
    <button onClick={hanldeHold} className="die" style={dieStyles}>
      {number}
    </button>
  );
};

export default Die;
