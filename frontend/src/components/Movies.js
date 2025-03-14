import React, { useState } from 'react';
import Form from './Form';
import '../styles/card.css'
function Movies(){
    const [movies, setMovies] = useState([]);
    const [image,setImage]=useState([])

    return(

    <div >
        <Form setMovies={setMovies} setImage={setImage}/>
        <hr className='line'/>
      <div className='card'>
        <ul>
        {
  Array.isArray(movies) && Array.isArray(image) && movies.length > 0 && image.length > 0 ? (
    movies.map((movie, index) => (
      <div key={index} className='container'>
        <li className="name">{movie}</li>
        <img src={image[index]} alt='' />
      </div>
    ))
  ):""
}

         </ul>
         </div>

    </div>

    )
}
export default Movies
