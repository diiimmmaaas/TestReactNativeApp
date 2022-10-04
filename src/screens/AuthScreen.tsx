import React, {useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {CustomButton} from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthScreen = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: {errors},
  } = useForm();

  const navigation = useNavigation<any>();
  const onSubmit = async (data: any) => {
    try {
      await AsyncStorage.setItem('login', data.name);
      navigation.goBack();
    } catch (e) {
      Alert.alert('Error storage');
    }
  };

  const onChangeText = (keyName: string, text: string) => {
    setValue(keyName, text);
  };

  useEffect(() => {
    register('name');
    register('password');
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText('name', text)}
        value={watch('name')}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={text => onChangeText('password', text)}
        value={watch('password')}
      />
      <CustomButton
        title={'Sing In'}
        onPress={handleSubmit(onSubmit)}
        top={32}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  label: {
    paddingHorizontal: 10,
  },
});
