import React from "react";
import banner from "../images/banner.jpg";

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
