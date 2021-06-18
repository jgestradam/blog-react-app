import React from 'react';
import '../assets/styles/App.scss';
import ProfileInfo from '../components/ProfileInfo';
import BlogsMain from '../components/BlogsMain';
import ProfileProjects from '../components/ProfileProjects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Profile = () => {
  return (
    <div>
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
