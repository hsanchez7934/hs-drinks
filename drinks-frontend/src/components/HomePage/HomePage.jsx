import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
import { fetchBottle, fetchSpirit, fetchCocktail } from '../../actions';
import { connect } from 'react-redux';
import BottleCard from '../BottleCard/BottleCard.jsx';
import SpiritCard from '../SpiritCard/SpiritCard.jsx';
import CocktailCard from '../CocktailCard/CocktailCard.jsx';
import Header from '../Header/Header.jsx';

class HomePage extends Component {
  constructor() {
    super();
    this.state ={
      title: 'HOME',
      description: `Thirsty? We can help. Explore
                    our extensive library and let
                    us help you make your favorite drink today.
                    Check out our featured bottle, spirit, and cocktail of
                    the day below.`,
      randomCocktail: null,
      randomBottle: null,
      randomSpirit: null
    };
  }

  componentDidMount() {
    this.fetchRandomItem('cocktails', 'randomCocktail');
    this.fetchRandomItem('spirits', 'randomSpirit');
    this.fetchRandomItem('bottles', 'randomBottle');
  }

  fetchRandomItem = (table, query) => {
    fetch(`/api/v1/${table}/random`)
      .then(response => response.json())
      .then(parsedResponse => {
        this.setState({
          [query]: parsedResponse[0]
        });
      })
      .catch(error => console.log('shits on fire yo'));
  }

  render() {
    const { cocktail, bottle, spirit } = this.props;
    const { title, description, randomCocktail, randomSpirit, randomBottle } = this.state;

    if (randomCocktail && randomBottle && randomSpirit) {
      return (
        <section id='homepage-container'>
          <Header title={title} description={description} />
          <section id='home-container'>
            <article className='featured-card'>
              <h2 className='featured-text'>FEATURED BOTTLE</h2>
              <BottleCard bottle={randomBottle} />
            </article>
            <article className='featured-card'>
              <h2 className='featured-text'>FEATURED SPIRIT</h2>
              <SpiritCard spirit={randomSpirit} />
            </article>
            <article className='featured-card'>
              <h2 className='featured-text'>FEATURED COCKTAIL</h2>
              <CocktailCard cocktail={randomCocktail} />
            </article>
          </section>
        </section>
      );
    } else  {
      return (
        <section id='homepage-container'>
          <Header title={title} description={description} />
          <section id='home-container'>

          </section>
        </section>
      );
    }
  }
}

HomePage.propTypes = {
  fetchSpirit: PropTypes.func,
  fetchBottle: PropTypes.func,
  fetchCocktail: PropTypes.func,
  spirit: PropTypes.object,
  cocktail: PropTypes.object,
  bottle: PropTypes.object
};

const mapStateToProps = store => ({
  spirit: store.spirit,
  bottle: store.bottle,
  cocktail: store.cocktail
});

const mapDispatchToProps = dispatch => ({
  fetchSpirit: (id) => dispatch(fetchSpirit(id)),
  fetchCocktail: (id) => dispatch(fetchCocktail(id)),
  fetchBottle: (id) => dispatch(fetchBottle(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
