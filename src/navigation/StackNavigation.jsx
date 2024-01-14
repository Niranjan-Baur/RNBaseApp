import { View, Text } from 'react-native'
import React, { Profiler } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import DrawerNavigation from './DrawerNavigation';
import Navigation from './Navigation';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  console.log('StackNavigation')
  return (
    <Stack.Navigator initialRouteName='Main'>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Main"
        component={DrawerNavigation}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#dd5f46',
          },
          headerTintColor: '#fff',
        }} 
      />
      {/* <Stack.Screen name="Main" component={BottomTabNavigation} options={{
        title: 'Home'
      }}/> */}

    </Stack.Navigator>
  )
}

export default StackNavigation