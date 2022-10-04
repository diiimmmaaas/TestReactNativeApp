import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {EScreens} from '../navigation/screens';

export const StartScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToAuth = () => {
    navigation.navigate(EScreens.AUTH);
  };

  return (
    <View style={styles.container}>
      <CustomButton title={'Start'} onPress={navigateToAuth} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
