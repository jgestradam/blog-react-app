import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogsMain from '../components/BlogsMain';
import ImgBlog from '../components/ImgBlog';
import BlogPost from '../components/BlogPost';
import Contact from '../components/Contact';

const Blog = () => {
  return (
    <div>
      <Header />
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
