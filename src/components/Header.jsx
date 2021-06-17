import React from 'react';
import '../assets/components/Header.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <section className='nav-logo-container'>
          <a href='/'>
            <img src='access/icons8-blog-100.png' alt='Logo de mi blog' />
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
