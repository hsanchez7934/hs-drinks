import React, { Component } from 'react';
import PropTypes from 'prop-types';
import drinksLogo from '../../assets/app-icons/cocktail-cup.svg';
import './SideBar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import BottlesPage from '../BottlesPage/BottlesPage';
import CocktailsPage from '../CocktailsPage/CocktailsPage';
import SpiritsPage from '../SpiritsPage/SpiritsPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';

const routes = [
  {
    path: '/',
    main: () => <HomePage />,
    exact: true
  },
  {
    path: '/spirits',
    main: () => <SpiritsPage />
  },
  {
    path: '/cocktails',
    main: () => <CocktailsPage />
  },
  {
    path: '/bottles',
    main: () => <BottlesPage />
  },
  {
    path: '/favorites',
    main: () => <FavoritesPage />
  }
];

const displayRoutes = () => (
  routes.map((route, index) =>
    <Route
      key={index}
      path={route.path}
      component={route.main}
      exact={route.exact} />
  )
);

const SideBar = () => (
  <Router>
    <section id='display-container'>

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
                <Link
                  className='links-text'
                  to='/'>
                  HOME
                </Link>
              </li>
              <li className='links'>
                <Link
                  className='links-text'
                  to='/spirits'>
                  SPIRITS
                </Link>
              </li>
              <li className='links'>
                <Link
                  className='links-text'
                  to='/cocktails'>
                  COCKTAILS
                </Link>
              </li>
              <li className='links'>
                <Link
                  className='links-text'
                  to='/bottles'>
                  BOTTLES
                </Link>
              </li>
              <li className='links'>
                <Link
                  className='links-text'
                  to='/favorites'>
                  FAVORITES
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </aside>

      <div id='main-display'>
        {
          displayRoutes()
        }
      </div>
    </section>
  </Router>
);


SideBar.propTypes = {
  cocktailsOnClick: PropTypes.func,
  bottlesOnClick: PropTypes.func,
  spiritsOnClick: PropTypes.func,
  homeOnClick: PropTypes.func
};

export default SideBar;
