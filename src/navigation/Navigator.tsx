import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {EScreens} from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StartScreen} from '../screens/StartScreen';
import {AuthScreen} from '../screens/AuthScreen';
import {NoInternetScreen} from '../screens/NoInternetScreen';
import {useNetInfo} from '@react-native-community/netinfo';
import {useEffect} from 'react';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const netInfo = useNetInfo();
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (!netInfo.isConnected) {
      navigation.navigate(EScreens.NO_INTERNET);
    } else {
      navigation.navigate(EScreens.START);
    }
  }, [navigation, netInfo.isConnected]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={EScreens.START} component={StartScreen} />
      <Stack.Screen name={EScreens.AUTH} component={AuthScreen} />
      <Stack.Screen name={EScreens.NO_INTERNET} component={NoInternetScreen} />
    </Stack.Navigator>
  );
};
