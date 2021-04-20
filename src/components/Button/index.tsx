import React from 'react'
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from '../../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 56,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: colors.green,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: colors.white,
  }
});

export default Button;
