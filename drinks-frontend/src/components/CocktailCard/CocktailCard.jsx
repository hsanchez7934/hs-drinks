import React, { Component } from 'react';
import './CocktailCard.css';
import absintheCocktails from '../../staticAssets/absintheCocktailImages.js';
import aperitifCocktails from '../../staticAssets/aperitifCocktailImages.js';
import baijiuCocktails from '../../staticAssets/baijiuCocktailImages.js';
import bourbonAndWhiskeyCocktails from '../../staticAssets/bourbonAndWhiskeyCocktailImages.js';
import brandyCocktails from '../../staticAssets/brandyCocktailImages.js';
import cachacaCocktails from '../../staticAssets/cachacaCocktailImages.js';
import cognacCocktails from '../../staticAssets/cognacCocktailImages.js';
import ginCocktails from '../../staticAssets/ginCocktailImages.js';
import liqueurCocktails from '../../staticAssets/liqueurCocktailImages.js';
import mezcalCocktails from '../../staticAssets/mezcalCocktailImages.js';
import piscoCocktails from '../../staticAssets/piscoCocktailImages.js';
import rumCocktails from '../../staticAssets/rumCocktailImages.js';
import scotchCocktails from '../../staticAssets/scotchCocktailImages.js';
import tequilaCocktails from '../../staticAssets/tequilaCocktailImages.js';
import vermouthCocktails from '../../staticAssets/vermouthCocktailImages.js';
import vodkaCocktails from '../../staticAssets/vodkaCocktailImages.js';
import PropTypes from 'prop-types';

const backgroundImage = (url) => ({
  backgroundImage: 'url('+ url +')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
});

const createIngredientsList = (array) => {
  return array.map( (ingredient, index) =>
    <li className='ingredient' key={index}>{ingredient}</li>
  );
};

const CocktailCard = ({ cocktail }) => {
  //eslint-disable-next-line
  const { name, directions, imageURL, ingredients, id, spirit_id, spiritType } = cocktail;
  return (
    <article className='cocktail-card' id={id}>
      <div className='cocktail-image' style={backgroundImage(imageURL)}></div>
      <div className='cocktail-info'>
        <h3 className='cocktail-name'>{name}</h3>
        <p className='spirit-type'>SPIRIT: {spiritType}</p>
        <div className='cocktail-splitter'>
          <div className='splitter-left'>
            <label>INGREDIENTS</label>
            <ul className='ingredients-container'>
              {createIngredientsList(ingredients)}
            </ul>
          </div>
          <div className='splitter-right'>
            <label>DIRECTIONS</label>
            <p className='cocktail-directions'>{directions}</p>
          </div>
        </div>
        <div className='favorite-button-container'>
          <button className='favorite-button'>FAVORITE</button>
        </div>
      </div>
    </article>
  );
};

CocktailCard.propTypes = {
  cocktail: PropTypes.object
};

export default CocktailCard;
