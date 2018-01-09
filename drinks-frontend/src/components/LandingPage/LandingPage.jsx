import React, { Component } from 'react';
import './LandingPage.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import drinksLogo from '../../assets/app-icons/cocktail-cup.svg';


export default class LandingPage extends Component {
  render() {
    return (
      <section id='landingpage-container'>
        <header className='drinks-header'>
          <h1 id='app-title'>
            <span id='dr'>DR</span>
            <img src={drinksLogo} alt='Drinks logo icon.' id='cocktail-icon' />
            <span id='nks'>NKS</span>
          </h1>
        </header>
        <section id='landingpage-hero'>
          <section id='app-intro'>
            <h2 id='welcome-title'>WELCOME</h2>
            <p id='intro-description'>
              Swiss Shinkansen Tsutaya delightful international, boulevard Ginza.
              Vibrant K-pop handsome bureaux, pintxos international
              lovely Gaggenau izakaya artisanal essential espresso uniforms
               efficient ANA. Finest smart Muji Gaggenau, K-pop bureaux
               Winkreative signature impeccable exquisite Melbourne conversation.
               Helsinki global espresso Airbus A380, Beams Fast Lane hub
              extraordinary Boeing 787 exquisite efficient wardrobe elegant
              hand-crafted. Bureaux craftsmanship delightful Nordic smart the
              best destination discerning Beams Marylebone sharp eclectic
              conversation.
            </p>
            <section id='get-started-button-container'>
              <Link to={'/userpage'}>
                <button id='get-started-button'>GET STARTED</button>
              </Link>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
