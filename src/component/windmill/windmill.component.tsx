import React from "react";
import "./windmill.style.scss";

const Windmill = () => {
  return (
    <div className="wrapper">
      <div className="windmill">
        <div className="post"></div>
        <div className="engine"></div>
        <div className="flaps">
          <div className="flap"></div>
          <div className="flap"></div>
          <div className="flap"></div>
        </div>
      </div>
    </div>
  );
};

export default Windmill;