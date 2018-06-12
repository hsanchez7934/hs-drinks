import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import SideBar from '../SideBar/SideBar.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
      </div>
    );
  }
}
