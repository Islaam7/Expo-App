import React, { useState } from 'react';
import { router } from "expo-router";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/Config'; 
import { auth } from '../firebase/Config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Icoon from 'react-native-vector-icons/FontAwesome';


const Register = () => {
  const [email, setEmail] = useState('');
  const [Id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePress = async () => {
    if (email === '' || password === '') {
      setError({ code: 'Please fill in all fields.' });
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created with ID: ', userCredential.user.uid);
  
      const docRef = await addDoc(collection(db, 'users'), {
        firstName,
        lastName,
        gender,
        email,
        Id,
      });
      console.log('Document written with ID: ', docRef.id);
      setSuccessMessage('Register Successful!'); 
    } catch (error) {
      console.error('Error adding document: ', error);
      setError({ code: error.message });
      setSuccessMessage(''); 
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="ID"
        value={Id}
        onChangeText={setId}
        style={styles.input}
      />
      <TextInput
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>router.replace("/account/login")}>
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/account/forgetpassword")}>
        <Text style={styles.link}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.homeButton} onPress={() =>router.replace("/(tabs)")} styyle={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icoon name="home" size={35} color="#000"  />
      </TouchableOpacity>


      {successMessage ? <Text style={styles.success}>{successMessage}</Text> : null}
      {error.code && <Text style={styles.error}>{error.code}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#dedede",
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    width: '80%',
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  success: {
    marginTop: 10,
    color: 'green',
  },
  error: {
    marginTop: 10,
    color: 'red',
  },
  link: {
    marginTop: 10,
    color: '#007bff',
  },
  homeButton: {
    position: 'absolute',
    top: 10, 
    left: 430,
    zIndex: 10, 
  },
});

export default Register;
