import React from "react";
import logoImg from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center py-5">
      <img className="mx-auto" src={logoImg} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE , MMMM dd , yyyy")}</p>
    </div>
  );
};

export default Header;
