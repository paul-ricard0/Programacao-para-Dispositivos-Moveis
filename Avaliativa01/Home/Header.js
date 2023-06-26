import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

import Paisagem from '../assets/paisagem.jpg'

export default () => {
  return (
    <View>
      <Image source={Paisagem} style={styles.image}/>
      <View style={styles.viewtxt}>
        <Text style={styles.title}>PUNTA CANA</Text>
        <Text style={styles.info}> 4 hóspedes - 2 quartos - 2 carros - 1 banheiro </Text>
        <Text style={styles.avaliacao}> ⭐ 4,70 (61 comentários) </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    height: 250,
    width: '100%'
  },
  viewtxt:{
    marginLeft: 10,
  },
  title:{
    fontSize: 28,
    fontFamily: 'Roboto',
  },
  info:{
    paddingTop: 5,
    paddingBottom: 5
  },
  avaliacao:{
    fontWeight: "bold",
    fontSize: 15,
  }
})