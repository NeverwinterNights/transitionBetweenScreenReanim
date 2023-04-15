import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainNavigator} from './src/navi/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
