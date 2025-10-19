import React from "react";
import swimmingImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playImg from "../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-300 rounded-sm px-3">
      <h1 className="font-bold my-8 pt-4">Find Us On</h1>

      <div>
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
