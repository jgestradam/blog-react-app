import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import BlogNews from '../components/BlogNews';
import BlogsPostContainer from '../components/BlogsPostContainer';
import Post from '../components/Post';
import BlogsMain from '../components/BlogsMain';
import Footer from '../components/Footer';

const Blogs = () => {
  return (
    <div>
      <Header />
      <BlogsMain>
        <BlogNews />
        <BlogsPostContainer>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </BlogsPostContainer>
      </BlogsMain>
      <Footer />
    </div>
  );
};

export default Blogs;
