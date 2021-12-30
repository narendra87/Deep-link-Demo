import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './home';
import People from './people';
const stack = createStackNavigator({
  Home: {screen: Home},
  People: {screen: People},
});
const Router = createAppContainer(stack);
export default Router;
