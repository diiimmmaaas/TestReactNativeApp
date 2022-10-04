import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const NoInternetScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/images/no-internet.jpg')}
      />
      <Text>No internet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 32,
  },
});
