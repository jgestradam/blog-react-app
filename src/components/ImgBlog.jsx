import React from 'react';
import post from '../assets/static/CSS4.jpg';
import '../assets/components/ImgBlog.scss';

const ImgBlog = (props) => {
  return (
    <section className='grid-container blogpost-img-container'>
      <img src={post} alt='' />
    </section>
  );
};

export default ImgBlog;
