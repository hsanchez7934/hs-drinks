import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CocktailsPage.css';
import { fetchCocktails } from '../../actions';
import { connect } from 'react-redux';
import Header from '../Header/Header.jsx';
import CocktailCard from '../CocktailCard/CocktailCard.jsx';

class CocktailsPage extends Component {
  constructor() {
    super();
    this.state = {
      title: 'COCKTAILS',
      description: `There's a drink for every
                    mood or occasion. Find your
                    favorite cocktail recipes below.
                    Or think outside the glass and
                    try a brand new drink. Your
                    new favorite could be a shake
                    or stir away. `
    };
  }

  componentDidMount() {
    this.props.fetchCocktails();
  }

  createCocktailCard = () => {
    const { cocktails } = this.props;
    return cocktails.map( (cocktail, index) =>
      <CocktailCard cocktail={cocktail} key={index} />
    );
  }

  render() {
    const { title, description } = this.state;
    return (
      <section id='cocktailspage-container'>
        <Header
          title={title}
          description={description} />
        <section id='cocktails-container'>
          {
            this.createCocktailCard()
          }
        </section>
      </section>
    );
  }
}

CocktailsPage.propTypes = {
  fetchCocktails: PropTypes.func,
  cocktails: PropTypes.array
};

const mapStateToProps = store => ({
  cocktails: store.cocktailsData
});

const mapDispatchToProps = dispatch => ({
  fetchCocktails: () => dispatch(fetchCocktails())
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsPage);
