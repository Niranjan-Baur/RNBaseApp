import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  console.log('DrawerNavigation')
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      headerShown:false,
      drawerType:'slide'
      }}>
      <Drawer.Screen name="Home" component={BottomTabNavigation} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation