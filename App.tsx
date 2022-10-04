import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigator} from './src/navigation/Navigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
