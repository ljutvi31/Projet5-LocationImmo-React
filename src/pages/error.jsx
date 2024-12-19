import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/error.scss";

function Error({
  errorCode = 404,
  messageError = "Oups! La page que vous demandez n'existe pas.",
  linkPath = "/",
  linkText = "Retourner sur la page d'accueil" 
}) {
  return (
    <div className="error">
      <h1 className="error__title">{errorCode}</h1>
      <p className="error__text">{messageError}</p>
      <Link to={linkPath} className="error__link">
        {linkText}
      </Link>
    </div>
  );
}

export default Error;