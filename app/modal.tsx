import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';
import { View } from '@/components/Themed';

export default function ModalScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    console.log('Login credentials:', username, password);
  };

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {/* <Image
        style={styles.logo}
        source={require('@/assets/facebook-logo.png')}
      /> */}
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email or phone"
          placeholderTextColor="#888"
          onChangeText={setUsername}
          value={username}
          keyboardType="email-address"
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
    backgroundColor: '#FFFFF',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  loginContainer: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: '#FFF',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1877F2',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
