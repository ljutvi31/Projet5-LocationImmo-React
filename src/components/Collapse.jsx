import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = () => {
    // Si le contenu est un tableau ou doit être affiché comme une liste
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    // Si c'est du texte simple
    return <div>{content}</div>; // Changé de <p> à <div>
  };

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
      </button>
      {isOpen && <div className="collapse__content">{renderContent()}</div>}
    </div>
  );
}

export default Collapse;
