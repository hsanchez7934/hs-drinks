import React, { Component } from 'react';
import PropTypes from 'prop-types';
import drinksLogo from '../../assets/app-icons/cocktail-cup.svg';
import './SideBar.css';

export default class SideBar extends Component {

  render () {
    return (
      <aside id='sidebar'>
        <section id='sidebar-top-section'>
          <h1 id='sidebar-app-title'>
            <span id='sidebar-dr'>DR</span>
            <img src={drinksLogo} alt='' id='sidebar-logo' />
            <span id='sidebar-nks'>NKS</span>
          </h1>
        </section>
        <section id='sidebar-bottom-section'>
          <nav id='sidebar-nav-links-container'>
            <ul id='nav-links-box'>
              <li className='links'>
                <p
                  className='links-text'
                  onClick={() => this.props.homeOnClick()}>
                  HOME
                </p>
              </li>
              <li className='links'>
                <p
                  className='links-text'
                  onClick={() => this.props.spiritsOnClick()}>
                  SPIRITS
                </p>
              </li>
              <li className='links'>
                <p
                  className='links-text'
                  onClick={() => this.props.cocktailsOnClick()}>
                  COCKTAILS
                </p>
              </li>
              <li className='links'>
                <p
                  className='links-text'
                  onClick={() => this.props.bottlesOnClick()}>
                  BOTTLES
                </p>
              </li>
              <li className='links'>
                <p className='links-text'>
                  FAVORITES
                </p>
              </li>
            </ul>
          </nav>
        </section>
      </aside>
    );
  }
}

SideBar.propTypes = {
  cocktailsOnClick: PropTypes.func,
  bottlesOnClick: PropTypes.func,
  spiritsOnClick: PropTypes.func,
  homeOnClick: PropTypes.func
};
