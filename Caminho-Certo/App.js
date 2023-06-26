import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Constants from 'expo-constants'; // para pegar constantes do sistema do celular

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './home/HomeScreen';
import ContactScreen from './contacts/ContactScreen';
import SosScreen from './sos/SosScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={defaultOptions}>

        <Stack.Screen name="home" component={HomeScreen} options={homeOption} />
        
        <Stack.Screen name="contact" component={ContactScreen} options={contactOption}/>

        <Stack.Screen name='sos' component={SosScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const homeOption = {
  headerShown: false,
};

const contactOption = {
  title: 'lista de Contatos',
};

