import React from "react";
import logo from "./img/logo.png";
import "./Logo.css";

const Logo = ({ onClick }) => {
  return <img src={logo} alt="logo" className="logoImage" onClick={onClick} />;
};

export default Logo;
