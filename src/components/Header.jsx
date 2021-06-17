import React from 'react';
import '../assets/components/Header.scss';
import logo from '../assets/static/logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <section className='nav-logo-container'>
          <a href='/'>
            <img src={logo} alt='Logo de mi blog' />
            {' '}
          </a>
        </section>
        <section className='profile-link'>
          <a href='./perfil.html'>Sobre mí</a>
        </section>
      </nav>
    </header>
  );
};

export default Header;
