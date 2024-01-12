import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <View>
      <Text>DrawerNavigation</Text>
    </View>
  )
}

export default DrawerNavigation