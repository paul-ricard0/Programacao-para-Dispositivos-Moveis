import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default () => {
  const [location, setLocation] = useState(null);
  const [pontos, setPontos] = useState([]);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    getCoords();
    fetchData();
  }, []);


  const getCoords = async () => {
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

    setLat(location.coords.latitude)
    setLong(location.coords.longitude)
  }

  const fetchData = async () => {
    try {
      const API_KEY = ""
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=500&types=bank,bar,cafe,gym,park,restaurant&key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {
        setPontos(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView initialRegion={location} style={styles.map}>
        {location && (
          <Marker coordinate={location}>
            <MaterialCommunityIcons name="human-greeting" size={30} color="black" />
          </Marker>
        )}
        {pontos.map((pontos, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: pontos.geometry.location.lat,
              longitude: pontos.geometry.location.lng,
            }}
            title={pontos.name}
          />
        ))}
      </MapView>
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
