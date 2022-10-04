import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigator} from './src/navigation/Navigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
