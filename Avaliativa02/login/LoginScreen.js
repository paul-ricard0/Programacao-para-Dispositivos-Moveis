import * as React from 'react';
import { useState } from 'react';
import { View,  StyleSheet,  TextInput, Button  } from 'react-native';


// 12109624
// 624


export default ({ navigation, route }) => {

  const [user, setUsername] = useState('');
  const [pass, setPassword] = useState('');

  async function login() {

    try {

      console.log(`user ${user}`);
      console.log(`pass ${pass}`);

      
      const httpResponse = await fetch(
        'https://auth-api.tarleylana.repl.co/authorize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user,
          password: pass,
        })
      })

      console.log(httpResponse.status)
      
      const userResponse = await httpResponse.json()
      console.log(userResponse)

      navigation.navigate('profile',  { userData: userResponse.data})

    } catch(error) {
      console.log("FALHA NA REQUISIÇÃO")
    }
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setUsername(value)}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Button onPress={login} title="Login"  />
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
