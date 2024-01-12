import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeA" component={Home} />
      <Drawer.Screen name="ProfileA" component={Profile} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation