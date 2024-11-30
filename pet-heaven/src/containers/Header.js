import { React, useRef }from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Header = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <h3>Pet Heaven</h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/dog">Dogs</Link>
        <Link to="/cat">Cats</Link>
        <Link to="/release">Release</Link>
        <Link to="/about">About</Link>
        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavBar}>
        <FaBars />
      </button>
      <div className='btn'>
        <Link to="/signup" className='btn login-btn'>Register</Link>
        <Link to="/login"><Button>Login</Button></Link>
      </div>
      
    </header>
  )
}

export default Header