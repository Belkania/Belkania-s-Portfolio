import React, { useState } from "react";
import ResumeSvg from "../svg/Resume";
import GitHubSvg from "../svg/GitHubSvg";
import Facebook from "../header/img/facebook.png";
import Instagram from "../header/img/instagram.png";
import Linkedin from "../header/img/linkedin.png";

import "./NavBar.css";

const NavBar = () => {
  const [burgerClass, setBurgerClass] = useState("unclicked");
  const [menuClass, setMenuClass] = useState("hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("clicked");
      setMenuClass("visible");
    } else {
      setBurgerClass("unclicked");
      setMenuClass("easyOut");
      setTimeout(() => {
        setMenuClass("hidden");
      }, 500);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className={`${burgerClass} burger`} onClick={updateMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`barMenu ${menuClass}`}>
        <div className="NavBarTabs">
          <a href="https://www.facebook.com/georgebelqania" target="_blank">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/mr.belkania/" target="_blank">
            <img src={Instagram} alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/giorgi-belkania-b4b74b158/"
            target="_blank"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
          <div className="NavBarButton">
            <a href="https://github.com/Belkania" target="_blank">
              <GitHubSvg />
            </a>
          </div>
          <div className="NavBarButton">
            <a href="link-to-resume">
              <ResumeSvg />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
