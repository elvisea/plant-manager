import React, { useEffect, useState } from 'react'
import { ptBR } from 'date-fns/locale'
import { formatDistance } from 'date-fns'
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'

import Header from '../../components/Header'
import PlantCardSecondary from '../../components/PlantCardSecondary'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import waterdrop from '../../assets/waterdrop.png'
import { loadPlant, PlantProps } from '../../libs/storage'


export default function MyPlants() {

  const [myplants, setMyPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState<string>()

  useEffect(() => {
    async function loadStorageData() {
      const plantStoraged = await loadPlant()

      const nextTime = formatDistance(
        new Date(plantStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      )

      setNextWatered(
        `Não esqueça de regar a ${plantStoraged[0].name} à ${nextTime}`
      )

      setMyPlants(plantStoraged)
      setLoading(false)

    }

    loadStorageData()
  }, [])

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image
          source={waterdrop}
          style={styles.spotlightImage}
        />

        <Text style={styles.spotlightText}>{nextWatered}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Próximas regadas</Text>

        <FlatList
          data={myplants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  spotlightImage: {
    width: 60,
    height: 60
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
  },
  plants: {
    flex: 1,
    width: '100%'
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20
  }
})