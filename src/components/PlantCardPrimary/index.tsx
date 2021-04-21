import React from 'react';
import { SvgFromUri } from 'react-native-svg';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

function PlantCardPrimary({ data, ...rest }: PlantCardPrimaryProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '50%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 5,
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16,

  },
});

export default PlantCardPrimary;
