import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Programmer",
          "Full-Stack Developer",
          "Coding Enthusiast",
          "Open Source Contributor",
          // "Medium Articles Creator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
