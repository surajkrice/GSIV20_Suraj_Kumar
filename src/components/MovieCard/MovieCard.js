import React from 'react'
import '../MovieCard/MovieCard.css'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
const MovieCard = ({image,title,description,rating,id}) => {

    return (
        <Link to={`/movie/${id}`}>
        <div className='moviecard-container'>
            <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="poster"></img>
            
            <h3><StarIcon/>{rating}</h3>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
        </Link>
    )
}

export default MovieCard
