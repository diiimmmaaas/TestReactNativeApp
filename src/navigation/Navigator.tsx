import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {EScreens} from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StartScreen} from '../screens/StartScreen';
import {AuthScreen} from '../screens/AuthScreen';
import {NoInternetScreen} from '../screens/NoInternetScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={EScreens.START} component={StartScreen} />
        <Stack.Screen name={EScreens.AUTH} component={AuthScreen} />
        <Stack.Screen
          name={EScreens.NO_INTERNET}
          component={NoInternetScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
