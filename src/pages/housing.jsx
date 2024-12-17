import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import HousingInfo from '../components/HousingInfo/HousingInfo';
import HousingHost from '../components/HousingHost/HousingHost';
import HousingDetails from '../components/HousingDetails/HousingDetails';
import Error from '../pages/error';
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
            <Slideshow pictures={housing.pictures} />
            <div className="housing__content">
                <div className="housing__header">
                    <HousingInfo 
                        title={housing.title}
                        location={housing.location}
                        tags={housing.tags}
                    />
                    <HousingHost 
                        host={housing.host}
                        rating={housing.rating}
                    />
                </div>
                <HousingDetails 
                    description={housing.description}
                    equipments={housing.equipments}
                />
            </div>
        </div>
    );
}

export default Housing;