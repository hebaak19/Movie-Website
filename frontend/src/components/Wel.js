import React, { useState, useEffect } from 'react';
import '../styles/Hero.css'
function Wel(){
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetch('http://127.0.0.1:8000/welcome')
          .then(response => response.json())
          .then(data => {
            setMessage(data.message);
          })
      }, []);
      return(
        <div className='Hero' >
          <div className='hero-text'>
          <h1>{message ? message : 'nothing'}</h1>
          <p>We are very excited to recommend some movies that suits you</p>
          </div>
        </div>

      )

}
export default Wel
