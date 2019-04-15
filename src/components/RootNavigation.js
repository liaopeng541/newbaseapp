import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeTab from "./HomeTab"
const RootNavigation=createStackNavigator({
  Home:{ screen:HomeTab }
})
export default createAppContainer(RootNavigation)