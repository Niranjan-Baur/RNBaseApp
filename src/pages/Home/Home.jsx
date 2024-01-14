import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const Home = ({ navigation }) => {
  return (
    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button mode='contained' onPress={() => {
        navigation.openDrawer();
      }}>Open Drawer</Button>
    </View>
  );
};

export default Home;
