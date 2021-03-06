import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  Text,
  StyleSheet
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

function EnvironmentButton({ title, active = false, ...rest }: EnvironmentButtonProps) {
  return (
    <RectButton {...rest} style={[
      styles.container, active && styles.containerActive
    ]}>
      <Text style={[
        styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 10
  },
  containerActive: {
    backgroundColor: colors.green_light
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});

export default EnvironmentButton;
