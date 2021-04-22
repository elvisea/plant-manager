import React from 'react';

import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import Header from '../../components/Header';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import waterdropImg from '../../assets/waterdrop.png'

function MyPlants() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.card_blue}>
        <Image source={waterdropImg} style={styles.image} resizeMode="contain" />
        <Text style={styles.description}>
          Regue sua Aningapara {'\n'}daqui a 2 horas
        </Text>
      </View>
      
      <Text style={styles.title}>Próximas Regadas!</Text>

      <View style={styles.card_gray}>
        <Image source={waterdropImg} style={styles.image} resizeMode="contain" />
        <Text style={styles.card_gray_description}>
          Peperomia
        </Text>

        <View style={styles.metadata}>
          <Text style={styles.metadata_text}>Regar às</Text>
          <Text style={styles.metadata_hour}>07:30</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  card_blue: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 88,
    width: '100%',
    borderRadius: 20,
    backgroundColor: colors.blue_light
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
    marginHorizontal: 20,
  },
  description: {
    fontSize: 15, 
    fontFamily: fonts.text, 
    color: colors.blue, 
    lineHeight: 23
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    textAlign: 'left',
    marginVertical: 30
  },
  card_gray: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 88,
    width: '100%',
    borderRadius: 20,
    backgroundColor: colors.shape
  },
  card_gray_description: {
    fontSize: 17, 
    fontFamily: fonts.heading, 
    color: colors.body_dark, 
    lineHeight: 25
  },
  metadata: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 80
  },
  metadata_text: {
    fontSize: 14, 
    color: colors.body_light, 
    fontFamily: fonts.text
  },
  metadata_hour: {
    fontSize: 14, 
    color: colors.body_dark, 
    fontFamily: fonts.heading
  }
});

export default MyPlants;
