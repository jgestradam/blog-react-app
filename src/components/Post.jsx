import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/Post.scss';
import post from '../assets/static/CSS4.jpg';

const Post = (props) => {
  return (
    <article className='post-container'>
      <img src={post} alt='' />
      <p>Titulo del blogpost</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint placeat est repudiandae illum dolores omnis veniam magnam?</p>
      <Link className='blogs-button' to='/blog'>
        Leer mas
      </Link>
    </article>
  );
};

export default Post;
