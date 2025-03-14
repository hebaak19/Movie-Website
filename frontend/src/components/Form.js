import React, { useState } from 'react';
import '../styles/form.css'
import {Send,SearchX} from 'lucide-react'
function Form({setMovies,setImage}){
    const [genre,setGenre]=useState('');
    const [director,setDirector]=useState('');
    const [rating,setRating]=useState('');
    const [error, setError] = useState('');

    const handleData = async(e)=>{
        e.preventDefault()
        const userPrefrences={
          genre,
          director,
          rating
        };
        try{
          const response=await fetch('http://127.0.0.1:8000/recommend',
          {method:"POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(userPrefrences)
          })
          const data=await response.json()
          console.log(data)
          if(data&&Array.isArray(data["movies"])&&Array.isArray(data['images'])){
            setMovies(data['movies']);
            setImage(data['images']);
            setError("")

          }
          else{
            setMovies([]);
            setImage([]);
            setError("Sorry, We couln't find a movie that matches your criteria!")
          }

        }
        catch(error)
        {
          console.log(error)
        }}
    return(
      <div className='form-container'>
        <form onSubmit={handleData} className='form'>
            <label>What is your favorite type of movies ?</label>
            <input type='text' placeholder='e.g. action, horror ,thriller ,spy ,crime ,sci-fi, drama'
            value={genre} onChange={(e)=>{setGenre(e.target.value)}} required={true}></input>
            <label>Who is your favorite director ?</label>
            <input type='text' placeholder='e.g. Sam Raimi, Leitch, Mazin, Brian De Palma, Nolan '
            value={director} onChange={(e)=>{setDirector(e.target.value)}} required={true}></input>
            <label>Do you want to watch movies above 8.5 ?</label>
            <input type='text' placeholder='high/low'
            value={rating} onChange={(e)=>{setRating(e.target.value)}} required={true}></input>
            <button type="submit">Find Out<Send className='icon'/></button>
      </form>
      {error && <p className='error'>{error}<SearchX className='icon'/></p>}
      </div>


    )

}
export default Form
