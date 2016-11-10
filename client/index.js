import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line

import Root from './components/Root';
import configureStore from './configureStore';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line
const store = configureStore(initialState);

ReactDOM.render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root') // eslint-disable-line
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextRoot = require('./components/Root').default; // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      document.getElementById('root') // eslint-disable-line
    );
  });
}
