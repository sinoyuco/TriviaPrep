import React from 'react';
import ReactDOM from 'react-dom';


import configureStore from './store/store';
import Root from './components/root';
import reportWebVitals from './reportWebVitals';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore({});

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

// reportWebVitals();
