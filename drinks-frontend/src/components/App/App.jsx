import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { fetchSpirits } from '../../actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchSpirits();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

const mapStateToProps = store => ({
  spirits: store.spiritsData
});

const mapDispatchToProps = dispatch => ({
  fetchSpirits: () => dispatch(fetchSpirits())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
