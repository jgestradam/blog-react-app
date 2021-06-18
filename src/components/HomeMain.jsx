import React from 'react';
import { Link } from 'react-router-dom';

const HomeMain = (props) => {
  return (
    <main className='home-main'>
      <section>
        <h1 className='home-main-text'>Conoce las novedades y noticias del Mundo Tech</h1>
        <Link className='home-main-button' to='/blogs'>
          Entra ya!
        </Link>
      </section>
    </main>
  );
};

export default HomeMain;
