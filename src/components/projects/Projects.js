import React from "react";
import "./Projects.css";

import pigGame from "./img/pig-game.png";
import guessMyNumber from "./img/guess-my-number.png";
import ticTacToe from "./img/tic-tac-toe.png";
import clock from "./img/clock.png";
import cursor from "./img/cursor.png";
import facebook from "./img/facebook.png";

const Projects = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="mainContainer">
      <h1>
        <span>P</span>
        <span>r</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span> </span>
        <span>M</span>
        <span>a</span>
        <span>k</span>
        <span>e</span>
        <span>s</span>
        <span> </span>
        <span>P</span>
        <span>e</span>
        <span>r</span>
        <span>f</span>
        <span>e</span>
        <span>c</span>
        <span>t</span>
      </h1>
      <div className="projectsContainer">
        <div className="project">
          <img src={pigGame} alt="pig game" />
          <div className="description">
            <h2>Pig Game</h2>
            <p>Dice Game</p>
            <div
              className="projectButton"
              onClick={() =>
                openLinkInNewTab("https://pig-game-three-khaki.vercel.app/")
              }
            >
              Go Live
            </div>
          </div>
        </div>
        <div className="project">
          <img src={guessMyNumber} alt="guess my number" />
          <div className="description">
            <h2>Guess my Number</h2>
            <p>Player must guess Right number</p>
            <div
              className="projectButton"
              onClick={() =>
                openLinkInNewTab("https://guess-my-number-orcin.vercel.app/")
              }
            >
              Go Live
            </div>
          </div>
        </div>
        <div className="project">
          <img src={ticTacToe} alt="tic tac toe" />
          <div className="description">
            <h2>Tic Tac Toe</h2>
            <p>Wins X or 0</p>
            <div
              className="projectButton"
              onClick={() =>
                openLinkInNewTab("https://tic-tac-toe-zeta-sepia.vercel.app/")
              }
            >
              Go Live
            </div>
          </div>
        </div>
        <div className="project">
          <img src={clock} alt="clock" />
          <div className="description">
            <h2>Clock</h2>
            <p>Real time clock</p>
            <div
              className="projectButton"
              onClick={() =>
                openLinkInNewTab("https://belkania-s-clock.vercel.app/")
              }
            >
              Go Live
            </div>
          </div>
        </div>
        <div className="project">
          <img src={cursor} alt="cursor" />
          <div className="description">
            <h2>Hover Cursor</h2>
            <p>Move your cursor to see magic</p>
            <div
              className="projectButton"
              onClick={() => openLinkInNewTab("https://cursor-ten.vercel.app/")}
            >
              Go Live
            </div>
          </div>
        </div>
        <div className="project">
          <img src={facebook} alt="facebook" />
          <div className="description">
            <h2>Facebook search</h2>
            <p>Simple search</p>
            <div
              className="projectButton"
              onClick={() =>
                openLinkInNewTab("https://facebook-search.vercel.app/")
              }
            >
              Go Live
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
