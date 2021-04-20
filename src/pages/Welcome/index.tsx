import React from 'react'
import { Text, StyleSheet, Image, SafeAreaView } from 'react-native';

import wateringImg from '../../assets/watering.png'
import Button from '../../components/Button';
import colors from '../../styles/colors';

// primeiro código: missão espacial
function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}suas plantas {'\n'}de forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}sempre que precisar.
      </Text>

      <Button title=">" onPress={() => { }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 38,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
  },
  subtitle: {
    paddingHorizontal: 20,
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading,
  },
  image: {
    width: 230,
    height: 230,
  }
});

export default Welcome;
