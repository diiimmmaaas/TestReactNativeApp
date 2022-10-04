import React, {useEffect} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {useForm} from 'react-hook-form';
import {CustomButton} from '../components/CustomButton';

export const AuthScreen = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: {errors},
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
