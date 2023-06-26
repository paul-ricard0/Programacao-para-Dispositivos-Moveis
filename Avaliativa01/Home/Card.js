import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'


import Foto from '../assets/papai_cris.jpg'

export default () =>
  <View style={styles.viewMain}>

    <View style={styles.viewProfile}>  
      <Image source={Foto} style={styles.image}/>

      <View style={styles.viewInfo}>
        <Text style={styles.name}> Milena </Text>
        <Text> Fevereiro 2021 </Text>
      </View>    
      
    </View>

    <Text> Observe que você precisa fornecer o caminho para a imagem usando a propriedade source e, em seguida</Text>

  </View>


const styles = StyleSheet.create({
  viewMain:{
    margin: 10,
    marginTop: 20
  },
  viewProfile:{
    flexDirection: 'row',
  },
  viewInfo:{
    justifyContent: 'center',
    padding: 5,
  },
  image:{
    height: 70, 
    width: 70,
    borderRadius: 50
  },
  name:{
    fontWeight: "bold",
    fontSize: 18
  }
})