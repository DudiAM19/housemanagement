import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../tabs';
import AddBill from '../../scenes/Bill/AddBill/AddBill';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
