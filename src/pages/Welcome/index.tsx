import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  View
} from 'react-native';

import wateringImg from '../../assets/watering.png'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts'

// primeiro código: missão espacial
// em busca do próximo nível
// astronautas
function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}suas plantas de {'\n'}forma fácil
        </Text>

        <Image source={wateringImg} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas {'\n'}
          plantas. Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("UserIdentification");
          }}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    marginTop: 38,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    paddingHorizontal: 20,
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  button: {
    width: 56,
    height: 56,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: colors.green,
    borderRadius: 16,
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  }
});

export default Welcome;
