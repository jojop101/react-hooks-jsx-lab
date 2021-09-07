import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <p>My Choice</p>
      <img src={image} alt="I made this" />
    </div>
  )
}

export default About;
