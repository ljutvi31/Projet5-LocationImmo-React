import React from 'react'
import banniere from './images/banniere.jpg'  // Import de l'image

function Banner() {
    return (
        <div className="banner" style={{backgroundImage: `url(${banniere})`}}>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner