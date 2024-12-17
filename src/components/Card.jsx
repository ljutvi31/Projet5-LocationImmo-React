import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}

// Validation des props avec PropTypes
Card.propTypes = {
  id: PropTypes.string.isRequired, // id, title et cover sont une chaîne de caractères et est obligatoire
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default Card;
