import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default ({navigation, route}) => {

  const {nome, tipo, telefone} = route.params 

  const [location, setLocation] = useState(null);

  useEffect(() => {
    getCoords()
  }, [])

  const getCoords = async() => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Necesário habilitar o serviço de localização de seu aparelho');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.004,
      longitudeDelta: 0.004,
    });
  } 



  return(
    <View>
      <View><MapView initialRegion={location} style={styles.map}/></View>
      <Text>Nome: {nome}</Text>
      <Text>Tipo: {tipo}</Text>
      <Text>Telefone: {telefone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});