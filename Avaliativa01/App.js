import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants'

import HomeScreen from './Home/HomeScreen'

export default () => {
  return(
    <View style={styles.main}> 
        <HomeScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{ 
    marginTop: Constants.statusBarHeight, //passando margin do statusbar 
    flex: 1 // para o main ocupar toda a tela
  }
})