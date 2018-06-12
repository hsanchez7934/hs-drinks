import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FavoritesPage.css';
//eslint-disable-next-line
import { fetchFavorites, destroyFavoriteFromDB, postFavoriteToDB } from '../../actions';
import { connect } from 'react-redux';
import CocktailCard from '../CocktailCard/CocktailCard.jsx';
import Header from '../Header/Header.jsx';

class SpiritsPage extends Component {
  constructor() {
    super();
    this.state = {
      title: 'FAVORITES',
      description: `Save your favorite cocktails here.`
    };
  }

  // componentDidMount() {
  //
  // }

  // createCocktailsBySpiritCards = () => {
  //   return this.props.cocktailsBySpirit.map( (cocktail, index) =>
  //     <CocktailCard
  //       cocktail={cocktail}
  //       key={index} />
  //   );
  // };

  render() {
    const { title, description } = this.state;
    return (
      <section id='favoritespage-container'>
        <Header
          title={title}
          description={description}/>
        <section id='favorites-container'>

        </section>
      </section>
    );
  }
}

SpiritsPage.propTypes = {
  fetchSpirits: PropTypes.func,
  spirits: PropTypes.array
};

const mapStateToProps = store => ({
  spirits: store.spiritsData,
  cocktailsBySpirit: store.cocktailsBySpirit,
  bottlesBySpirit: store.bottlesBySpirit

});

const mapDispatchToProps = dispatch => ({
  fetchFavorites: () => dispatch(fetchFavorites())
  // fetchBottlesBySpirit: (id) => dispatch(fetchBottlesBySpirit(id)),
  // fetchCocktailsBySpirit: (id) => dispatch(fetchCocktailsBySpirit(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpiritsPage);
