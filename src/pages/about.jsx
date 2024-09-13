import React from "react";
import { NavLink } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div className="p-16 flex flex-col justify-center text-center gap-4">
        <p>
          Like many other NBA fans I always wondered "Who is really the best?"
        </p>
        <p>
          With my passion for sports and developing web applications in hand, I
          sought to develop a better way in visualing data and deciding the age
          old question of{" "}
        </p>
        <p className="text-2xl font-bold">WHO IS THE BEST OF ALL TIME</p>
      </div>
    );
  }
}

export default About;
