import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import drinksLogo from '../../assets/app-icons/cocktail-cup.svg';
import './InformationPage.css';
import SpiritsPage from '../SpiritsPage/SpiritsPage.jsx';
import CocktailsPage from '../CocktailsPage/CocktailsPage.jsx';


export default class InformationPage extends Component {

  render() {
    return (
      <section id='informationpage-container'>
        {/* <SpiritsPage /> */}
        <CocktailsPage />
      </section>
    );
  }
}
