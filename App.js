import React from 'react';
// import {View, Text} from 'react-native';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import RootNavigator from './src/navigations';

const App = () => {
  return <RootNavigator />;
};

export default App;
