import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
// import { fetchBottles } from '../../actions';
import { connect } from 'react-redux';
import BottleCard from '../BottleCard/BottleCard.jsx';
import SpiritCard from '../SpiritCard/SpiritCard.jsx';
import CocktailCard from '../CocktailCard/CocktailCard.jsx';
import Header from '../Header/Header.jsx';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state ={
      title: 'HOME',
      description: `Thirsty? We can help. Start exploring
                    exploring our extensive library and let
                    us help you make or find your favorite drink today.`
    };
  }

  render() {
    const { title, description } = this.state;
    return (
      <section id='homepage-container'>
        <Header title={title} description={description} />
        <section id='home-container'>

        </section>
      </section>
    );
  }
}
