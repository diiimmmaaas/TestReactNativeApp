import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '../components/CustomButton';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {EScreens} from '../navigation/screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StartScreen = () => {
  const navigation = useNavigation<any>();
  const [login, setLogin] = useState<string | null>(null);

  const navigateToAuth = () => {
    navigation.navigate(EScreens.AUTH);
  };

  const checkLogin = async () => {
    const res = await AsyncStorage.getItem('login');

    if (res) {
      setLogin(res);
    }
  };

  useFocusEffect(
    useCallback(() => {
      checkLogin();
    }, []),
  );

  return (
    <View style={styles.container}>
      {login && (
        <>
          <Text style={{marginBottom: 16}}>Hello, {login}</Text>
        </>
      )}
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
