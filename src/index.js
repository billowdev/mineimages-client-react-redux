import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={configureStore(services)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
