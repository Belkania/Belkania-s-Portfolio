import React, { useEffect } from "react";
import WordFlicker from "../worldFlicker/WordFlicker";
import "./Story.css";
import ImageSlider from "../imagesSlider/ImagesSlider";

const Story = () => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll(".storyContainer p");

    paragraphs.forEach((paragraph, index) => {
      if (index % 2 === 0) {
        paragraph.classList.add("slideInFromLeft");
      } else {
        paragraph.classList.add("slideInFromRight");
      }
    });

    return () => {
      paragraphs.forEach((paragraph, index) => {
        if (index % 2 === 0) {
          paragraph.classList.remove("slideInFromLeft");
        } else {
          paragraph.classList.remove("slideInFromRight");
        }
      });
    };
  }, []);

  return (
    <div className="storyContainer">
      <WordFlicker />
      <div className="textContainer">
        <p>
          Welcome to my corner of the web! I'm Giorgi Belkania, a passionate
          front-end developer hailing from the beautiful country of Georgia. My
          journey into the world of coding began just over two years ago when I
          made a pivotal decision to change the course of my life. It was a leap
          of faith, fueled by a burning desire to immerse myself in the world of
          technology.
        </p>
        <p>
          Since then, every day has been a new chapter in my development
          journey. As a relatively fresh face in the realm of developers, I've
          embraced the challenge with open arms, eagerly soaking up knowledge
          and honing my skills. With each line of code I write, I'm not just
          crafting applications; I'm crafting my future.
        </p>
        <p>
          It's been an exhilarating journey of growth and discovery. Every bug
          squashed, every project completed, brings me closer to my goal of
          becoming a proficient and sought-after developer. I thrive on the
          thrill of learning something new each day, pushing myself beyond my
          limits, and watching as my capabilities expand.
        </p>
        <p>
          Join me on this adventure as I continue to evolve, innovate, and leave
          my mark on the digital landscape. Together, let's build something
          remarkable.
        </p>
      </div>
      <ImageSlider />
    </div>
  );
};

export default Story;
