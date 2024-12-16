import React from "react";
import Collapse from "../components/Collapse";
import aboutbanner from "../images/aboutbanner.jpg";
import "../styles/components/about.scss";
import aboutData from "../data/about.json";
function About() {
  return (
    <div className="about">
      <div
        className="about-banner"
        style={{ backgroundImage: `url(${aboutbanner})` }}
      ></div>
      <div className="about__collapses">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
