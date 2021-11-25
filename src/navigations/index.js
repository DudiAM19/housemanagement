import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import AppStack from './app';
import TabNavigator from './tabs';

const RootStack = createNativeStackNavigator();
const RootStackNavigation = () => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    <RootStack.Screen name="Tab" component={TabNavigator} />
  </RootStack.Navigator>
);

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
};

export default RootNavigator;
