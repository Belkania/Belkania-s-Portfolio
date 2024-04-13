import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Knowledge.css";

import BootstrapImage from "./img/Bootstrap.png";
import ReduxImage from "./img/Redux.png";
import CSSImage from "./img/CSS3.png";
import HTMLImage from "./img/html.png";
import JavaScriptImage from "./img/JavaScript.png";
import MongoDBImage from "./img/MongoDB.jpg";
import ReactImage from "./img/React.png";
import SassImage from "./img/Sass.png";
import TypeScriptImage from "./img/Typescript.png";
import Back from "./img/Back.png";
import Right from "./img/Right.png";
import Gif from "../gif/Gif";
import WordCloud from "../skillsAnimation/SkillsAnimation";

const Knowledge = () => {
  const knowledgeItems = [
    {
      imageUrl: BootstrapImage,
      title: "Bootstrap",
      description: "1 year experience",
    },
    {
      imageUrl: ReduxImage,
      title: "Redux",
      description: "1 year experience",
    },
    {
      imageUrl: CSSImage,
      title: "CSS",
      description: "2 year experience",
    },
    {
      imageUrl: HTMLImage,
      title: "HTML5",
      description: "2 year experience",
    },
    {
      imageUrl: JavaScriptImage,
      title: "JavaScript",
      description: "2 year experience",
    },
    {
      imageUrl: MongoDBImage,
      title: "MongoDB",
      description: "1 year experience",
    },
    {
      imageUrl: ReactImage,
      title: "React",
      description: "1 year experience",
    },
    {
      imageUrl: SassImage,
      title: "Sass",
      description: "2 year experience",
    },
    {
      imageUrl: TypeScriptImage,
      title: "TypeScript",
      description: "1 year experience",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this value according to when you want the animation to start
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === knowledgeItems.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [knowledgeItems.length]);

  return (
    <div ref={ref} className={`knowledge ${inView ? "visible" : ""}`}>
      <div class="sign">
        <span class="fast-flicker">s</span>kil<span class="flicker">l</span>s
      </div>
      {/* <Gif /> */}
      <div className="cartContainer">
        {knowledgeItems
          .slice(currentIndex, currentIndex + 3)
          .map((item, index) => (
            <div className="cart" key={index}>
              <div className="cartImage">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
      <WordCloud />
    </div>
  );
};

export default Knowledge;
