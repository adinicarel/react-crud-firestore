import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../logo.jpg';
import './header.css';

const Header:React.FC = () => {
  return (
    <header>
        <nav className='header_nav'>
          <Link to='/'><img src={logo} alt="logo" width='300' /></Link>
          <Link className='add_link' to={'/add'}>ADD TO FAMILY</Link>
        </nav>
      </header>
  )
}

export default Header;