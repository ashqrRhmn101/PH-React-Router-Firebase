import React from "react";
import logoImg from "../assets/logo.png";

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logoImg} alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default Header;
