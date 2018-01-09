import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App.jsx';
import config from './testSetup.js';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
