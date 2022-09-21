import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Header from './Components/Header';
import Main from './Components/Main';
import ShoppingCart from './Components/ShoppingCart';
const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <Main />
      <ShoppingCart />
    </SafeAreaView>
  );
};

export default App;
