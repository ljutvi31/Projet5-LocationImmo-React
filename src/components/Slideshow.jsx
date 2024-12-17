import React, { useState } from "react";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!pictures) { // vérification si pas de picture, retourne un tableau vide // 
    return [];
  }
  const length = pictures.length;

  if (length <= 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="Logement" className="slideshow__image" />
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt="Logement"
        className="slideshow__image"
      />

      <button
        className="slideshow__arrow slideshow__arrow--prev"
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className="slideshow__arrow slideshow__arrow--next"
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className="slideshow__counter">
        {currentIndex + 1}/{length}
      </div>
    </div>
  );
}

export default Slideshow;
