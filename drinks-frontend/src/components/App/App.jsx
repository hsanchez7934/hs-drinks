import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import LandingPage from '../LandingPage/LandingPage.jsx';
import UserPage from '../UserPage/UserPage.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
  componentDidMount() {
    // this.props.fetchSpirits();
  }

  render() {
    return (
      // <BrowserRouter>
      //   <div className="App">
      //     <Route exact path='/' render={ () => <LandingPage /> } />
      //   </div>
      // </BrowserRouter>
      <div className='App'>
        <UserPage />
      </div>
    );
  }
}
