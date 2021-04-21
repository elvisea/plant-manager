import React from 'react';
import Lottie from 'lottie-react-native'
import { View, StyleSheet } from 'react-native';

import loadAnimation from '../../assets/load.json'

function Load() {
  return (
    <View style={styles.container}>
      <Lottie
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200,
  },
});

export default Load;
