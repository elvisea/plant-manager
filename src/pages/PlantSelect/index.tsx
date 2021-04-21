import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';

import Load from '../../components/Load';
import Header from '../../components/Header';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import EnvironmentButton from '../../components/EnvironmentButton';

import api from '../../services/api';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

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
  const navigation = useNavigation();

  const [environments, setEnvironments] = useState<Environments[]>([])
  const [plants, setPlants] = useState<Plants[]>([])
  const [filteredPlants, setFilteredPlants] = useState<Plants[]>([])
  const [environmentSelected, setEnvironmentSelected] = useState('all')
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)
  const [LoadedMore, setLoadedMore] = useState(false)

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === 'all')
      return setFilteredPlants(plants);

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment)
    )

    setFilteredPlants(filtered);
  }

  async function fetchPlants() {
    const { data } = await api
      .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if (!data) {
      return setLoading(true)
    }

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data)
      setFilteredPlants(data)
    }

    setLoading(false)
    setLoadingMore(false)
  }

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants()
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api
        .get('plants_environments?_sort=title&_order=asc');

      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ]);
    }

    fetchEnvironment();
  }, [])

  useEffect(() => {
    fetchPlants();
  }, [])

  if (loading) {
    return <Load />
  }

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
          keyExtractor={item => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => { handleEnvironmentSelected(item.key) }}
            />
          )}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore
              ? <ActivityIndicator color={colors.green} />
              : <></>
          }
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
    marginVertical: 30,
    marginLeft: 30
  },
  plants: {
    flex: 1,
    marginHorizontal: 30
  }
});

export default PlantSelect;
