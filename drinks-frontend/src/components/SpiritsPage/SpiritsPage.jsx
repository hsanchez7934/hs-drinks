import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SpiritsPage.css';
import { fetchSpirits } from '../../actions';
import { connect } from 'react-redux';
import SpiritCard from '../SpiritCard/SpiritCard.jsx';
import Header from '../Header/Header.jsx';

class SpiritsPage extends Component {
  constructor() {
    super();
    this.state = {
      title: 'SPIRITS',
      description: `These are some of the most popular spirits
      in the world today. With a huge number to
      choose from, it is hard to figure out what to drink.
      Let us help you find your new favorite today.`
    };
  }

  componentDidMount() {
    this.props.fetchSpirits();
  }

  createSpiritCard = () => {
    const { spirits } = this.props;
    return spirits.map( (spirit, index) =>
      <SpiritCard spirit={spirit} key={index} />
    );
  }

  render() {
    const { title, description } = this.state;
    return (
      <section id='spiritspage-container'>
        <Header title={title} description={description} />
        <section id='spirits-container'>
          {
            this.createSpiritCard()
          }
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
  spirits: store.spiritsData
});

const mapDispatchToProps = dispatch => ({
  fetchSpirits: () => dispatch(fetchSpirits())
});

export default connect(mapStateToProps, mapDispatchToProps)(SpiritsPage);
