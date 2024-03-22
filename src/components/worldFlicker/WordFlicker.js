import React, { useEffect } from "react";
import $ from "jquery";

import "./WordFlicker.css";

const WordFlicker = () => {
  useEffect(() => {
    const words = [
      "This is my story",
      "I'm Giorgi",
      "From Georgia",
      "საქართველოდან",
      "I love coding",
      "I also love Football",
      "MESSI",
      "Barca",
    ];
    let part;
    let i = 0;
    let offset = 0;
    const len = words.length;
    let forwards = true;
    let skip_count = 0;
    const skip_delay = 15;
    const speed = 70;

    const wordflick = () => {
      setInterval(() => {
        if (forwards) {
          if (offset >= words[i].length) {
            skip_count++;
            if (skip_count === skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset === 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
              i = 0;
            }
          }
        }
        part = words[i].substr(0, offset);
        if (skip_count === 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
        $(".word").text(part);
      }, speed);
    };

    wordflick();

    // Cleanup function
    return () => {
      clearInterval(wordflick);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return <div className="word"></div>;
};

export default WordFlicker;
