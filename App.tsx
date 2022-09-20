import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {Counter} from './Counter';
import {store} from './Redux/init-store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Counter />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
