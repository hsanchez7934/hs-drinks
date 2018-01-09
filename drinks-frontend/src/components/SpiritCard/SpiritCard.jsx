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


const SpiritCard = ({ spirit, cocktailsButtonOnClick, bottlesButtonOnClick }) => {
  const { name, description, imageURL, id } = spirit;
  return (
    <article className='spirit-card' id={id}>
      <div className='spirit-image' style={backgroundImage(imageURL)}></div>
      <div className='spirit-info'>
        <h3 className='spirit-name'>{name}</h3>
        <p className='spirit-description'>{description}</p>
        <div className='spirit-buttons-container'>
          <button
            className='spirit-buttons'
            onClick={() => cocktailsButtonOnClick(id)}>COCKTAILS</button>
          <button
            className='spirit-buttons'
            onClick={() => bottlesButtonOnClick(id)}>BOTTLES</button>
        </div>
      </div>
    </article>
  );
};

SpiritCard.propTypes = {
  spirit: PropTypes.object
};

export default SpiritCard;
