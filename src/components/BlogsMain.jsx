import React from 'react';
import '../assets/components/BlogsMain.scss';

const BlogsMain = ({ children }) => {
  return (
    <main className='blogs-main'>
      {children}
    </main>
  );
};

export default BlogsMain;
