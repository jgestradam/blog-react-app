import React from 'react';
import '../assets/components/Contact.scss';
import letter from '../assets/static/013-newsletter.png';
import heart from '../assets/static/006-like.png';

const Contact = (props) => {
  return (
    <section className='contact-main-container'>
      <div>
        <img src={letter} alt='' />
        <div className='contact-left'>
          <a href='/'>CONTACTO</a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel rem fugiat officia. </p>
        </div>
      </div>
      <div>
        <img src={heart} alt='' />
        <div className='contact-right'>
          <a href='/'>ESCRIBEME</a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
