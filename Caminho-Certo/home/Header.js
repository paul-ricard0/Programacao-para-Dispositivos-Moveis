import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import Logo from '../assets/logo.png';

export default () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Caminho Certo</Text>
      <Image source={Logo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#25CCb0',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 26,
    fontWeight: 'bold',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
});
