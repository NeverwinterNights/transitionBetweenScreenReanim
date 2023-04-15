import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Main} from '../screens/Main';
import {Details} from '../screens/Details';
import {RootStackNavigatorParamList} from './navigationTypes';

export const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name={'Main'} component={Main} />
      <Stack.Screen name={'Details'} component={Details} />
    </Stack.Navigator>
  );
};
