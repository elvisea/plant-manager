import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import MyPlants from '../pages/MyPlants';

const tabRoutes = createBottomTabNavigator();

function NewPlant() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>NewPlant!</Text>
    </View>
  );
}

const TabRoutes: React.FC = () => (

  <tabRoutes.Navigator
    tabBarOptions={{
      tabStyle: { justifyContent: 'center', flexDirection: 'row' },
      activeTintColor: colors.green,
      inactiveTintColor: colors.gray,
      labelStyle: { fontFamily: fonts.heading, fontSize: 15 },
    }}
  >
    <tabRoutes.Screen name="Nova Planta" component={NewPlant} />
    <tabRoutes.Screen name="Minhas Plantinhas" component={MyPlants} />
  </tabRoutes.Navigator>
)

export default TabRoutes;