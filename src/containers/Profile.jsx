import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Footer from '../components/Footer';
import ProfileInfo from '../components/ProfileInfo';
import BlogsMain from '../components/BlogsMain';
import ProfileProjects from '../components/ProfileProjects';
import Contact from '../components/Contact';

const Profile = () => {
  return (
    <div>
      <Header />
      <BlogsMain>
        <ProfileInfo />
        <ProfileProjects />
        <Contact />
      </BlogsMain>
      <Footer />
    </div>
  );
};

export default Profile;
