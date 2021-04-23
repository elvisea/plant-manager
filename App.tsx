import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications'
import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular, Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Routes />
  )
}
