import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Error from '../pages/error';
import Collapse from '../components/Collapse';
import housings from '../data/housings.json';
import '../styles/components/housing.scss';

function Housing() {
    const { id } = useParams();
    const housing = housings.find(housings => housings.id === id);

    if (!housing) {
        return <Error />;
    }

    return (
        <div className="housing">
            {/* Section carrousel */}
            <Slideshow pictures={housing.pictures} />
            
            <div className="housing__content">
                {/* Section principale avec titre, localisation, tags et hôte */}
                <div className="housing__header">
                    {/* Partie gauche : info housings */}
                    <div className="housing__info">
                        <h1>{housing.title}</h1>
                        <p className="housing__location">{housing.location}</p>
                        {/* Section des tags */}
                        <div className="housing__tags">
                            {housing.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Partie droite : info hôte et notation */}
                    <div className="housing__host">
                        <div className="host">
                            <p className="host__name">{housing.host.name}</p>
                            <img src={housing.host.picture} alt={`Portrait de ${housing.host.name}`} className="host__picture" />
                        </div>
                        {/* Système de notation avec étoiles */}
                        <div className="rating">
                            {[...Array(5)].map((_, index) => (
                                <span 
                                    key={index} 
                                    className={`star ${index < housing.rating ? 'star--active' : ''}`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section Collapse description et équipements */}
                <div className="housing__details">
                    <div className="housing__collapse">
                        <Collapse title="Description" content={housing.description} />
                    </div>
                    <div className="housing__collapse">
                        <Collapse 
                            title="Équipements" 
                            content={
                                <ul>
                                    {housing.equipments.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Housing;