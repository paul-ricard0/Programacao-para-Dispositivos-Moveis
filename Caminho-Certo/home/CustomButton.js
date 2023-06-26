import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default ({ title = 'Sem titulo', buttonStyle, onPress }) => {
  // buttonStyle é para costumizar o botão na homeScreen
  // title eu passo na homeScreen o titulo do botao
  // onPress
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 70,
    backgroundColor: '#25CCB0',
    borderRadius: 15,
    elevation: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
