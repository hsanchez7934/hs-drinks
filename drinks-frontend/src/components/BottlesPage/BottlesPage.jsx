import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BottlesPage.css';
import { fetchBottles } from '../../actions';
import { connect } from 'react-redux';
import BottleCard from '../BottleCard/BottleCard.jsx';
import Header from '../Header/Header.jsx';

class BottlesPage extends Component {
  constructor() {
    super();
    this.state = {
      title: 'BOTTLES',
      description: `Not sure which spirit to use to make
                    your favorite cocktail with? Let us
                    help you by exploring our selection below.`
    };
  }

  componentDidMount() {
    this.props.fetchBottles();
  }

  createBottleCard = () => {
    const { bottles } = this.props;
    return bottles.map( (bottle, index) =>
      <BottleCard bottle={bottle} key={index} />
    );
  }

  render() {
    console.log(this.props);
    const { title, description } = this.state;
    return (
      <section id='bottlespage-container'>
        <Header title={title} description={description} />
        <section id='bottles-container'>
          {
            this.createBottleCard()
          }
        </section>
      </section>

    );
  }
}

BottlesPage.propTypes = {
  fetchBottles: PropTypes.func,
  bottles: PropTypes.array
};

const mapStateToProps = store => ({
  bottles: store.bottlesData
});

const mapDispatchToProps = dispatch => ({
  fetchBottles: () => dispatch(fetchBottles())
});

export default connect(mapStateToProps, mapDispatchToProps)(BottlesPage);
