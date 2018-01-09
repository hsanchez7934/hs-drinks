import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import LandingPage from '../LandingPage/LandingPage.jsx';
import UserPage from '../UserPage/UserPage.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact path='/'
            render={ () => <LandingPage /> } />
          <Route
            exact path='/userpage'
            render={ () => <UserPage /> } />
        </div>
      </BrowserRouter>
    );
  }
}
