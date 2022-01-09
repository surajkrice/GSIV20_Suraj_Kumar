import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import {getMovies} from '../../redux/actions/movieAction'
import '../Movies/Movies.css'

const Movies = () => {
    const [page, setpage] = useState(1)
    const movies = useSelector(state=> state.allMovies.movies)
    const dispatch = useDispatch();
    console.log(page)


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=06df3c26b14511324c01f56f498761ae&language=en-US&page=${page}`)
        .then(res=>res.json())
        .then(movie=>{
            dispatch(getMovies(movie.results))
            
        })
    }, [page])

    return (
    <>
        <div className='Movies-container'>
           {
                movies.map((item,index)=><MovieCard key={index} image={item.poster_path} 
                title={item.title} description={item.overview} rating={item.vote_average} id={item.id}/>)
           }
            
        </div>
        <div className='pagination-container'>
           { page>1 ? <ArrowBackIosIcon onClick={()=>setpage(page - 1)}/>:null} 
            <ArrowForwardIosIcon onClick={()=>setpage(page + 1)} />
        </div>
    </>
    )
}

export default Movies
