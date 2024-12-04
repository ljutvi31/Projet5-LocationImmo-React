import React, { useState } from 'react';
import '../styles/components/collapse.scss';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <i className={`fas fa-chevron-down collapse__chevron ${isOpen ? 'collapse__chevron--open' : ''}`}></i>
            </div>
            {isOpen && (
                <div className="collapse__content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
}

export default Collapse;