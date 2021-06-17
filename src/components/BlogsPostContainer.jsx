import React from 'react';
import '../assets/components/BlogsPostContainer.scss';

const BlogsPostContainer = ({ children }) => {
  return (
    <section className='blogs-posts-container'>
      <div className='grid-container'>
        {children}
      </div>
    </section>
  );
};

export default BlogsPostContainer;
