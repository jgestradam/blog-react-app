import React from 'react';
import '../assets/components/ProfileProjects.scss';

const ProfileProjects = () => {
  return (
    <section className='profile-main-projects'>
      <div className='grid-container'>
        <h3>Projects</h3>
        <div className='project-main-container'>
          <article className='project-container'>
            <h4>Titulo</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint placeat est repudiandae illum dolores omnis veniam magnam?</p>
          </article>
          <article className='project-container'>
            <h4>Titulo</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint placeat est repudiandae illum dolores omnis veniam magnam?</p>
          </article>
          <article className='project-container'>
            <h4>Titulo</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint placeat est repudiandae illum dolores omnis veniam magnam?</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProfileProjects;
