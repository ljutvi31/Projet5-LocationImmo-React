import React from 'react'
import banner from './images/banner.jpg'  // Import de l'image

function Banner() {
    return (
        <div className="banner" style={{backgroundImage: `url(${banner})`}}>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner