import React from 'react';
// import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../scenes/Home/Home';
import Profile from '../../scenes/Profile/Profile';
import Bill from '../../scenes/Bill/Bill';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const DrawerStackScreen = createDrawerNavigator();

const TabNavigator = () => {
  return (
    <DrawerStackScreen.Navigator initialRouteName="Home">
      <DrawerStackScreen.Screen name="Home" component={Home} />
      <DrawerStackScreen.Screen name="Profile" component={Profile} />
      <DrawerStackScreen.Screen name="Pay Bill" component={Bill} />
    </DrawerStackScreen.Navigator>
  );
};

export default TabNavigator;
