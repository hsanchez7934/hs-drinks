import React, { Component } from 'react';
import './BottleCard.css';
import PropTypes from 'prop-types';
import absintheBottles from '../../staticAssets/absintheBottles.js';
import aperitifBottles from '../../staticAssets/aperitifBottles.js';
import baijiuBottles from '../../staticAssets/baijiuBottles.js';
//eslint-disable-next-line
import bourbonAndWhiskeyBottles from '../../staticAssets/bourbonAndWhiskeyBottles.js';
import brandyBottles from '../../staticAssets/brandyBottles.js';
import cachacaBottles from '../../staticAssets/cachacaBottles.js';
import ginBottles from '../../staticAssets/ginBottles.js';
import liqueurBottles from '../../staticAssets/liqueurBottles.js';
import mezcalBottles from '../../staticAssets/mezcalBottles.js';
import piscoBottles from '../../staticAssets/piscoBottles.js';
import rumBottles from '../../staticAssets/rumBottles.js';
import scotchBottles from '../../staticAssets/scotchBottles.js';
import tequilaBottles from '../../staticAssets/tequilaBottles.js';
import vermouthBottles from '../../staticAssets/vermouthBottles.js';
import vodkaBottles from '../../staticAssets/vodkaBottles.js';

const backgroundImage = (url) => ({
  backgroundImage: 'url('+ url +')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
});

const BottleCard = ({ bottle }) => {
  const { name, description, imageURL, id, spiritType } = bottle;
  return (
    <article className='bottle-card' id={id}>
      <div className='bottle-image' style={backgroundImage(imageURL)}></div>
      <div className='bottle-info'>
        <h3 className='bottle-name'>{name}</h3>
        <p className='bottle-spirit-type'>SPIRIT: {spiritType}</p>
        <p className='bottle-description'>{description}</p>
      </div>
    </article>
  );
};

BottleCard.propTypes = {
  bottle: PropTypes.object
};

export default BottleCard;
