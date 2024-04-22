import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import React from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';

export default function ModalScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    console.log('Login credentials:', username, password);
    // Add your login logic here
  };

  return (
    <View style={styles.container}>
      <EditScreenInfo path="/app/modal.tsx" />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  loginContainer: {
    marginTop: 120,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 25,
    width: '80%',
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: '#FFF',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#5C6BC0',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  // ... (rest of your styles)
});
