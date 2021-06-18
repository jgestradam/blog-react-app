import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/BlogNews.scss';
import post from '../assets/static/CSS4.jpg';

const BlogNews = () => {
  return (
    <section className='blog-news-container'>
      <div className='blogs-main-new'>
        <h3>Soy un titulo</h3>
        <div className='blogs-new-img-container'>
          <img src={post} alt='' />
        </div>
        <div className='blogs-new-info-container'>
          <h2>Titulo del blogpost</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel aliquam nisi minima, nulla similique quam cumque vitae asperiores a ipsam!!</p>
          <Link className='blogs-button' to='/blog'>
            Leer mas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
