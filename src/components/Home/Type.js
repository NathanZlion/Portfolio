import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Contributor",
          ""
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 2,
        cursor: "█"
      }}
    />
  );
}

export default Type;
