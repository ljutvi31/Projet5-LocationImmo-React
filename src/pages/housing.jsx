import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import logements from '../Data/logements.json';

function Housing() {
    const { id } = useParams();
    const housing = logements.find(logement => logement.id === id);

    // Redirection vers la page d'erreur si le logement n'est pas trouvé
    if (!housing) {
        return <Error/>; //charge le composant Error 
    }

    return (
        <div className="housing">
            <Slideshow pictures={housing.pictures} />
            {/* Ici viendra le reste des informations du logement */}
        </div>
    );
}

export default Housing;