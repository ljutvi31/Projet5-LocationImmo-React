// src/pages/about.jsx
import React from 'react';
import Collapse from '../components/Collapse';
import aboutbanner from '../components/images/aboutbanner.jpg';
import '../styles/components/about.scss';

function About() {
    const aboutData = [
        {
            title: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            title: "Respect",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Service",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Sécurité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];

    return (
        <div className="about">
            <div className="about-banner" style={{backgroundImage: `url(${aboutbanner})`}}>
            </div>
            <div className="about__collapses">
                {aboutData.map((item, index) => (
                    <Collapse
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    );
}

export default About;