import React from 'react'
import '../styles/footer.css'
const Footer = () => {
    const date = new Date();
    const year=date.getFullYear()
  return (
    <footer className='footer'>
        <p>Developed by Heba Alkatheri © {year}</p>
    </footer>
  )
}

export default Footer

