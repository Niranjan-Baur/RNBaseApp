import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import DrawerNavigation from './DrawerNavigation';
import BottomTabNavigation from './BottomTabNavigation';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
      <StackNavigation />
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default AppNavigator;
