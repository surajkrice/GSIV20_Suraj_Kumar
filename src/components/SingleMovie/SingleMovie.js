import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import CastCard from '../CastCard/CastCard'
import '../SingleMovie/SingleMovie.css'

const SingleMovie = () => {
    const [movie, setmovie] = useState({})
    const [cast, setcast] = useState([])
    const params = useParams()
    console.log(params)
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=06df3c26b14511324c01f56f498761ae`)
        .then(res=>res.json())
        .then(movie=>{
            setmovie(movie)
            console.log('1')
        })
    }, [params.id])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=06df3c26b14511324c01f56f498761ae&language=en-US`)
        .then(res=>res.json())
        .then(cast=>{
            setcast(cast.cast)
            console.log(cast.cast)
        })
    }, [params.id])

    
    return (
        <div className='singlemovie'>
            <div className='poster-container'>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt='movie-poster'></img>
            </div>
            <div className='movie-details'>
                <div className='title-container'>
                    <h3>{movie.title}</h3>
                    <div className='rating-container'>
                        <StarIcon/>
                        <h2>{movie.vote_average}</h2>
                    </div>
                </div>
                <b style={{color: "#c04040"}}>Top Cast</b>
                <div className='cast'>
                {
                    cast.map(item=><CastCard key={item.id} image={item.profile_path} name={item.name}/>)
                }
                </div>
                
                <p><b>Story:</b> {movie.overview}</p>
            </div>
            
        </div>
    )
}

export default SingleMovie
