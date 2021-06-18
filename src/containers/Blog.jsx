import React from 'react';
import '../assets/styles/App.scss';
import BlogsMain from '../components/BlogsMain';
import ImgBlog from '../components/ImgBlog';
import BlogPost from '../components/BlogPost';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <div>
      <BlogsMain>
        <ImgBlog />
        <BlogPost />
        <Contact />
      </BlogsMain>
      <Footer />
    </div>
  );
};

export default Blog;
