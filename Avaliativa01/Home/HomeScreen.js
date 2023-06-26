import React from 'react'
import {View, FlatList} from 'react-native'

import Header from './Header'
import Card from './Card'

export default () => {
  return (
    <View>
      <Header/>
      <Card/>
      <Card/>
      <Card/>
    </View>
  )
}