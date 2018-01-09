import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InformationPage.css';
import SpiritsPage from '../SpiritsPage/SpiritsPage.jsx';
import CocktailsPage from '../CocktailsPage/CocktailsPage.jsx';
import BottlesPage from '../BottlesPage/BottlesPage.jsx';
import HomePage from '../HomePage/HomePage.jsx';

export default class InformationPage extends Component {
  constructor() {
    super();
    this.state ={
      CB: null,
      BB: null,
      SB: null,
      HB: null
    };
  }

  componentDidMount() {
    this.setState({
      CB: this.props.CB,
      BB: this.props.BB,
      SB: this.props.SB,
      HB: this.props.HB
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      CB: nextProps.CB,
      BB: nextProps.BB,
      SB: nextProps.SB,
      HB: nextProps.HB
    });
  }

  renderPage = () => {
    if (this.state.CB === true) {
      return <CocktailsPage />;
    }
    if (this.state.BB === true) {
      return <BottlesPage />;
    }
    if (this.state.SB === true) {
      return <SpiritsPage />;
    }
    if (this.state.HB === true) {
      return <HomePage />;
    }
  };

  render() {
    return (
      <section id='informationpage-container'>
        {
          this.renderPage()
        }
      </section>
    );
  }
}

InformationPage.propTypes = {
  CB: PropTypes.bool,
  BB: PropTypes.bool,
  SB: PropTypes.bool,
  HB: PropTypes.bool
};
