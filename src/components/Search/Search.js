import React from 'react'
import './Search.css'
import {Link} from 'react-router-dom'
const Search = ({title, id}) => {
  return (
          <Link  to={`/search/${id}`} >
                <ul>
                <li>{title}</li>                        
          </ul>
          </Link>
    )
}

export default Search
