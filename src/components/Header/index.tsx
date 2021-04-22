import React, { useEffect, useState } from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import userImg from '../../assets/elvis.png'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

function Header() {
  const [userName, setUserName] = useState<string>()

  // Carregar Nome salvo no Async Storage
  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUserName(user || '')
    }
    loadStorageUserName()
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image style={styles.image} source={userImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
});

export default Header;
