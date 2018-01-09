import React, { Component } from 'react';
import './UserPage.css';
import PropTypes from 'prop-types';
import drinksLogo from '../../assets/app-icons/cocktail-cup.svg';
import SideBar from '../SideBar/SideBar.jsx';
import InformationPage from '../InformationPage/InformationPage.jsx';

export default class UserPage extends Component {

  constructor() {
    super();
    this.state = {
      cocktailsBool: null,
      bottlesBool: null,
      spiritsBool: null,
      homeBool: true
    };
  }

  homeOnClick = () => {
    this.setState({
      cocktailsBool: false,
      bottlesBool: false,
      spiritsBool: false,
      homeBool: true
    });
  }

  cocktailsOnClick = () => {
    this.setState({
      cocktailsBool: true,
      bottlesBool: false,
      spiritsBool: false,
      homeBool: false
    });
  };

  bottlesOnClick = () => {
    this.setState({
      cocktailsBool: false,
      bottlesBool: true,
      spiritsBool: false,
      homeBool: false
    });
  }

  spiritsOnClick = () => {
    this.setState({
      cocktailsBool: false,
      bottlesBool: false,
      spiritsBool: true,
      homeBool: false
    });
  }

  render() {
    return (
      <section id='userpage-container'>
        <SideBar
          spiritsOnClick={this.spiritsOnClick}
          bottlesOnClick={this.bottlesOnClick}
          cocktailsOnClick={this.cocktailsOnClick}
          homeOnClick={this.homeOnClick} />
        <InformationPage
          CB={this.state.cocktailsBool}
          BB={this.state.bottlesBool}
          SB={this.state.spiritsBool}
          HB={this.state.homeBool} />
      </section>
    );
  }
}
