import React from 'react';
import '../assets/components/ProfileInfo.scss';
import post from '../assets/static/CSS4.jpg';

const ProfileInfo = (props) => {
  return (
    <section className='profile-main-container'>
      <div className='grid-container profile-container'>
        <div>
          <img src={post} alt='' />
        </div>
        <div className='blogs-new-info-container'>
          <h2>Hola mi nombre es </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel aliquam nisi minima, nulla similique quam cumque vitae asperiores a ipsam!!</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
