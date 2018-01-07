import React, { Component } from 'react';
import './UserPage.css';
import PropTypes from 'prop-types';
import drinksLogo from '../../assets/app-icons/cocktail-cup.svg';
import SideBar from '../SideBar/SideBar.jsx';
import InformationPage from '../InformationPage/InformationPage.jsx';

export default class UserPage extends Component {
  render() {
    return (
      <section id='userpage-container'>
        <SideBar />
        <InformationPage />
      </section>
    );
  }
}
