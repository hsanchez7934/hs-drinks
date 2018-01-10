import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SpiritsPage.css';
//eslint-disable-next-line
import { fetchSpirits, fetchCocktailsBySpirit, fetchBottlesBySpirit } from '../../actions';
import { connect } from 'react-redux';
import SpiritCard from '../SpiritCard/SpiritCard.jsx';
import CocktailCard from '../CocktailCard/CocktailCard.jsx';
import BottleCard from '../BottleCard/BottleCard.jsx';
import Header from '../Header/Header.jsx';

class SpiritsPage extends Component {
  constructor() {
    super();
    this.state = {
      title: 'SPIRITS',
      description: `These are some of the most popular spirits
      in the world today. With a huge number to
      choose from, it is hard to figure out what to drink.
      Let us help you find your new favorite today.`,
      conditionCocktail: null,
      conditionBottle: null
    };
  }

  componentDidMount() {
    this.props.fetchSpirits();
  }

  cocktailsButtonOnClick = (id) => {
    this.props.fetchCocktailsBySpirit(id);
    this.setState({
      conditionCocktail: true,
      conditionBottle: false
    });
  };

  bottlesButtonOnClick = (id) => {
    this.props.fetchBottlesBySpirit(id);
    this.setState({
      conditionCocktail: false,
      conditionBottle: true
    });
  };

  createCocktailsBySpiritCards = () => {
    return this.props.cocktailsBySpirit.map( (cocktail, index) =>
      <CocktailCard
        cocktail={cocktail}
        key={index} />
    );
  };

  createBottlesBySpiritCards = () => {
    return this.props.bottlesBySpirit.map( (cocktail, index) =>
      <BottleCard
        bottle={cocktail}
        key={index} />
    );
  };

  backButtonOnClick = () => {
    this.setState({
      conditionCocktail: false,
      conditionBottle: false
    });
  }

  createSpiritCard = () => {
    const { spirits } = this.props;
    return spirits.map( (spirit, index) =>
      <SpiritCard
        spirit={spirit}
        key={index}
        bottlesButtonOnClick={this.bottlesButtonOnClick}
        cocktailsButtonOnClick={this.cocktailsButtonOnClick} />
    );
  }

  render() {
    const { cocktailsBySpirit, bottlesBySpirit } = this.props;
    //eslint-disable-next-line
    const { title, description, conditionCocktail, conditionBottle } = this.state;

    if (cocktailsBySpirit.length && conditionCocktail) {
      return (
        <section id='spiritspage-container'>
          <Header
            title={'COCKTAILS'}
            description={cocktailsBySpirit[0].spiritType} />
          <section id='spirits-container'>
            <div className='backButton-container'>
              <button
                className='backButton'
                onClick={() => this.backButtonOnClick()}>
              </button>
            </div>
            {
              this.createCocktailsBySpiritCards()
            }
          </section>
        </section>
      );
    } else if (bottlesBySpirit.length && conditionBottle) {
      return (
        <section id='spiritspage-container'>


          <Header
            title={'BOTTLES'}
            description={bottlesBySpirit[0].spiritType} />
          <section id='spirits-container'>
            <div className='backButton-container'>
              <button
                className='backButton'
                onClick={() => this.backButtonOnClick()}>
              </button>
            </div>
            {
              this.createBottlesBySpiritCards()
            }
          </section>
        </section>
      );
    } else {
      return (
        <section id='spiritspage-container'>
          <Header
            title={title}
            description={description} />
          <section id='spirits-container'>
            {
              this.createSpiritCard()
            }
          </section>
        </section>
      );
    }
  }
}

SpiritsPage.propTypes = {
  fetchSpirits: PropTypes.func,
  spirits: PropTypes.array,
  fetchCocktailsBySpirit: PropTypes.func,
  fetchBottlesBySpirit: PropTypes.func,
  bottlesBySpirit: PropTypes.array,
  cocktailsBySpirit: PropTypes.array
};

const mapStateToProps = store => ({
  spirits: store.spiritsData,
  cocktailsBySpirit: store.cocktailsBySpirit,
  bottlesBySpirit: store.bottlesBySpirit
});

const mapDispatchToProps = dispatch => ({
  fetchSpirits: () => dispatch(fetchSpirits()),
  fetchBottlesBySpirit: (id) => dispatch(fetchBottlesBySpirit(id)),
  fetchCocktailsBySpirit: (id) => dispatch(fetchCocktailsBySpirit(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpiritsPage);
