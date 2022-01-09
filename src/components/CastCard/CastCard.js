import React from 'react'
import '../CastCard/CastCard.css'


const CastCard = ({image,name}) => {


    return (

        <div className='cast-container'>
            <div className='content-container'>
                {
                   image ? <img src={`https://image.tmdb.org/t/p/w300${image}`} alt={name}></img> : null
                }
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default CastCard
