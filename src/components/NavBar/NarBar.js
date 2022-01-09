import React, { useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Search from '../Search/Search'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    const [data, setdata] = useState([])
    const [hide, sethide] = useState(true)


  
    const handleHide = () =>{
        sethide(false)
    }

    const handleShow = () =>{
        sethide(true)
    }

  

    async function search(key)
    {
        
       let content = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=06df3c26b14511324c01f56f498761ae&language=en-US&query=${key}&page=1&include_adult=false`)
        content = await content.json();
        console.log(content.results)
        setdata(content.results)
    }


    return (
        <div className='navContainer'>
            <div className='search'>
                  <SearchIcon/>
                    <input onClick={handleShow} onChange={(e)=>search(e.target.value)} 
                    type='text' name="search"  placeholder='Search Movies' autoComplete='off' ></input>
                    <div onClick={handleHide} className='search-item'>
                    {
                       hide ? data.map(item=><Search key={item.id} title={item.title} id={item.id}/> ) : null 

                    }
                    </div>
            </div>
            <div  className='home-logo'>
                <Link to="/"><HomeIcon/></Link>
            </div>
        </div>
    )
}

export default NavBar

