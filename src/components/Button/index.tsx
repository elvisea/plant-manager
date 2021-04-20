import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
});

export default Button;
