import React from "react";
import ReactBodymovin from "react-bodymovin";

import "./AnimateJson.css";

const Animation = ({ animate }) => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animate,
  };

  return (
    <div>
      <div className="animation__container">
        <ReactBodymovin options={bodymovinOptions} />
      </div>
    </div>
  );
};

export default Animation;
