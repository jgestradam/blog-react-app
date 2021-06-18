import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/Footer.scss';

const Footer = (props) => {
  return (
    <footer>
      <p>
        Copyright © 2021.
        <Link to='/'>
          @jgestradam
        </Link>
        <br />
        All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
