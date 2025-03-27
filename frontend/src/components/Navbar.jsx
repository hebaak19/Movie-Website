import React,{useEffect,useState} from 'react'
import {Clapperboard,Search} from 'lucide-react'
import {Link} from 'react-scroll'
import '../styles/Navbar.css'
const Navbar = () => {
  const [darkNav,setNav]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>500 ? setNav(true):setNav(false)
    })
  },[])
  return (

       <nav className={`${darkNav ?'darknav':""}`}>
        <div className='logo'>
        <Clapperboard  size={40} />
        </div>
        <div>
            <ul>
                <li><Link to="Hero" smooth={true} duration={600} >Home</Link></li>
                <li><Link to="form" smooth={true} duration={600} offset={-58}>Search</Link> <Search className='icon'/></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar

