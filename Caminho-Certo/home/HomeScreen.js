import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

import Header from './Header';
import CustomButton from './CustomButton';

export default ({ navigation, route }) => {
  return (
    <View style={styles.main}>
      <Header />

      <View style={styles.menu}>
        <CustomButton
          title="SOS"
          buttonStyle={{ backgroundColor: 'red' }}
          onPress={() => navigation.navigate('contact')}
        />
        <CustomButton title="Registro" />
        <CustomButton title="Rastreio" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  menu: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
