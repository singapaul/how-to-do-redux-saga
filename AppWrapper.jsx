import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import store from './Redux/store';

const AppWrapper = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

export default AppWrapper;
