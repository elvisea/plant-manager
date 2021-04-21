import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import EnvironmentButton from '../../components/EnvironmentButton';

import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import Header from '../../components/Header';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import api from '../../services/api';
import PlantCardPrimary from '../../components/PlantCardPrimary';

interface Environments {
  key: string;
  title: string;
}

interface Plants {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

function PlantSelect() {
  const [environments, setEnvironments] = useState<Environments[]>([])
  const [plants, setPlants] = useState<Plants[]>([])

  useEffect(() => {
    api.get("plants_environments?_sort=title&_order=asc").then(response => {
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...response.data
      ])
    })
  }, [])

  useEffect(() => {
    api.get("plants?_sort=name&_order=asc").then(response => {
      setPlants(response.data)
    })
  }, [])

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={environments}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
          renderItem={({ item }) => (
            <EnvironmentButton title={item.title} />
          )}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={plants}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 30,
    marginVertical: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32
  },
});

export default PlantSelect;
