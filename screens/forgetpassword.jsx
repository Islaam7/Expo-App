import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { sendResetEmail } from "../firebase/auth";
import Icoon from 'react-native-vector-icons/FontAwesome';

const Forgetpassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const forgethandlePress = async () => {
    try {
      if (email.trim() === "") {
        throw new Error("Email field cannot be empty.");
      }
      await sendResetEmail(email);
      setError({ code: "Check your email for the reset link." });
    } catch (error) {
      setError({ code: error.message });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      
      <TouchableOpacity style={styles.button} onPress={forgethandlePress}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>router.replace("/account/register")}>
        <Text style={styles.link}>Register</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>router.replace("/account/login")}>
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.homeButton} onPress={() =>router.replace("/(tabs)")} styyle={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icoon name="home" size={35} color="#000"  />
      </TouchableOpacity>
      
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
  link: {
    marginTop: 10,
    color: '#007bff', 
  },
  error: {
    marginTop: 10,
    color: 'red',
  },
  homeButton: {
    position: 'absolute',
    top: 10, 
    left: 430,
    zIndex: 10, 
  },
});

export default Forgetpassword;
