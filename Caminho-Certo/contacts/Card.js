import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Filha from '../assets/filha.png';
import { AntDesign } from '@expo/vector-icons';

export default ({ tipo, nome, telefone, onDelete, onEdit }) => (
  <View style={styles.card}>
    <Image source={Filha} style={styles.img} />

    <View style={styles.info}>
      <Text>{tipo}</Text>
      <Text>{nome}</Text>
      <Text>{telefone}</Text>
    </View>
    <TouchableOpacity onPress={onDelete}>
      <AntDesign name="delete" size={24} color="red" />
    </TouchableOpacity>
    <TouchableOpacity onPress={onEdit}>
      <AntDesign name="edit" size={24} color="black" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    elevation: 100,
  },
  img: {
    width: 94,
    heigth: 100,
    padding: 15,
    borderRadius: 13,
  },
  info: {
    justifyContent: 'center',
    padding: 15,
  },
});
