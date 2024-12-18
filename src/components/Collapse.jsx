import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <div>{content}</div>;
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
