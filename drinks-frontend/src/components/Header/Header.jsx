import React, { Component } from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ title, description }) => (
  <header className='header-container'>
    <h1 className='header-title'>{title}</h1>
    <p className='header-description'>{description}</p>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Header;
