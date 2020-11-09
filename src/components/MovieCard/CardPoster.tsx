import React from 'react'
import poster from '../../assets/testbanner.jpg';

const CardPoster = () => {
    return (
        <div className='posterWrapp'>
            <div className="posterWrapp__img">
                <img src={poster} alt="poster"/>
            </div>
            <div className="posterWrapp__info"></div>
        </div>
    )
}

export default CardPoster
