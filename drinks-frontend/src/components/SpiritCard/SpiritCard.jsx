import React, { Component } from 'react';
import './SpiritCard.css';
import spirits from '../../staticAssets/spiritImages.js';
import PropTypes from 'prop-types';

const backgroundImage = (url) => ({
  backgroundImage: 'url('+ url +')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
});


const SpiritCard = ({ spirit }) => {
  const { name, description, imageURL, id } = spirit;
  return (
    <article className='spirit-card' id={id}>
      <div className='spirit-image' style={backgroundImage(imageURL)}></div>
      <div className='spirit-info'>
        <h3 className='spirit-name'>{name}</h3>
        <p className='spirit-description'>{description}</p>
        <div className='spirit-buttons-container'>
          <button className='spirit-buttons'>COCKTAILS</button>
          <button className='spirit-buttons'>BOTTLES</button>
        </div>
      </div>
    </article>
  );
};

SpiritCard.propTypes = {
  spirit: PropTypes.object
};

export default SpiritCard;
