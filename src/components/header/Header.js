import React from "react";
import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import GitHubSvg from "../svg/GitHubSvg";
import ResumeSvg from "../svg/Resume";
import Facebook from "./img/facebook.png";
import Instagram from "./img/instagram.png";
import Linkedin from "./img/linkedin.png";

import "./Header.css";

const Header = () => {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <Logo onClick={handleLogoClick} />
      <NavBar />
      <h1>
        <span>I</span>M<span>POSSIBLE</span>
      </h1>
      <div className="tabs">
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
        <div className="button">
          <a href="https://github.com/Belkania" target="_blank">
            <GitHubSvg />
          </a>
        </div>
        <div className="button">
          <a
            href="https://drive.google.com/file/d/1QRBq_T5yIMWWcbryvTU67yv6eY-xhQIL/view?/download"
            target="_blank"
          >
            <ResumeSvg />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
