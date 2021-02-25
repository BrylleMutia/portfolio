import React from "react";
import ReactBodymovin from "react-bodymovin";

import { animation, animation__container } from "./AnimateJson.module.css";

const Animation = ({ animate }) => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animate,
  };

  return (
    <div className={animation}>
      <div className={animation__container}>
        <ReactBodymovin options={bodymovinOptions} />
      </div>
    </div>
  );
};

export default Animation;
