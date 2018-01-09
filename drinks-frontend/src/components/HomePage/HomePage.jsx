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
                    the day below.`
    };
  }

  componentDidMount() {
    this.renderHomeData();
  }

  renderHomeData = () => {
    this.props.fetchCocktail(2875);
    this.props.fetchBottle(1948);
    this.props.fetchSpirit(358);
  }

  render() {
    const { cocktail, bottle, spirit } = this.props;
    const { title, description } = this.state;

    if (cocktail.id || bottle.id || spirit.id) {
      return (
        <section id='homepage-container'>
          <Header title={title} description={description} />
          <section id='home-container'>
            <article className='featured-card'>
              <h2 className='featured-text'>FEATURED BOTTLE OF THE DAY</h2>
              <BottleCard bottle={this.props.bottle} />
            </article>
            <article className='featured-card'>
              <h2 className='featured-text'>FEATURED SPIRIT OF THE DAY</h2>
              <SpiritCard spirit={this.props.spirit} />
            </article>
            <article className='featured-card'>
              <h2 className='featured-text'>FEATURED COCKTAIL OF THE DAY</h2>
              <CocktailCard cocktail={this.props.cocktail} />
            </article>
          </section>
        </section>
      );
    } else {
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
