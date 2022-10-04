import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ICustomButton {
  title: string;
  onPress: () => void;
  top?: number;
}

export const CustomButton = ({title, onPress, top = 0}: ICustomButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, {marginTop: top}]}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});
