import React, { Component } from 'react';
import './CocktailCard.css';
import spirits from '../../spiritImages.js';
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
  const { name, directions, imageURL, ingredients, id, spirit_id } = cocktail;
  return (
    <article className='cocktail-card' id={id}>
      <div className='cocktail-image' style={backgroundImage(imageURL)}></div>
      <div className='cocktail-info'>
        <h3 className='cocktail-name'>{name}</h3>
        <ul className='ingredients-container'>
          {createIngredientsList(ingredients)}
        </ul>
        <p className='cocktail-directions'>{directions}</p>
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
