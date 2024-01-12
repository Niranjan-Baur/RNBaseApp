import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <View>
      <Text>BottomTabNavigation</Text>
    </View>
  )
}

export default BottomTabNavigation