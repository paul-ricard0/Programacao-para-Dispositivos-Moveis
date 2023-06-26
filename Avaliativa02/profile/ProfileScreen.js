import * as React from 'react';
import { View, Text } from 'react-native';

export default ({ route }) => {
  const { userData } = route.params;

  return (
    <View>
      {Object.entries(userData).map(([key, value]) => (
        <Text key={key}>
          {key}: {value}
        </Text>
      ))}
    </View>
  );
};

// O método Object.entries() é usado para converter o objeto em um array de arrays, 
// onde cada item contém a chave e o valor de cada propriedade.
// Em seguida, o método map() é usado para percorrer cada item do array e retornar um elemento Text para cada um. 
// O operador de desestruturação é usado para obter a chave e o valor de cada item.