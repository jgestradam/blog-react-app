import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/Header.scss';
import logo from '../assets/static/logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <section className='nav-logo-container'>
          <Link to='/'>
            <img src={logo} alt='Logo de mi blog' />
          </Link>
        </section>
        <section className='profile-link'>
          <Link to='/profile'>
            Sobre mí
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
