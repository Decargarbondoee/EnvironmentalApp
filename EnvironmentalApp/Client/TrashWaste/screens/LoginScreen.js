import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import { URL } from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = function ({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  })

 
  const handleLogin = async () => {
    try {
      // Validate input
      if (!data.email || !data.password) {
        throw new Error('Email and Password are required');
      }
  
      // Make a request to your API for user login
      const response = await axios.post(`${URL}/login`, {
        email: data.email,
        password: data.password
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
  
      // Get Access Token, Refresh Token, id, and lastname from the response
      const { access_token, email, id, lastname, refresh_token } = response.data;
  
      // Save tokens and user information to AsyncStorage for future requests
      await AsyncStorage.multiSet([
        ['accessToken', access_token],
        ['refreshToken', refresh_token],
        ['UserId', String(id)],
        ['userName', lastname]
      ]);
  
      // Navigate to the authenticated screen
      navigation.navigate('MainTabs');
    } catch (error) {
      // Handle login failure
      console.error('Login failed:', error);
  
      // Display an error message to the user
      Alert.alert('Login Failed', error.message || 'Invalid username or password.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.TitleText}>WELCOME TO</Text>
      </View>
      <Image
        source={require('../assets/TWaste.png')}
        style={styles.imagestyle}
      />
      {/* <Text style={styles.title}>Login</Text> */}

      <View style={styles.input}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={data.email}
          onChangeText={(val) => setData({ ...data, email: val })}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(val) => setData({ ...data, password: val })}
          value={data.password}
        />

        <TouchableOpacity style={styles.buttonSubmit} onPress={handleLogin}>
          <Text style={styles.buttonSub}>Submit</Text>
        </TouchableOpacity>

        {<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordUpdate')}>
          <Text style={styles.buttonText}>Forget Password</Text>
        </TouchableOpacity>}

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText} ><Text style={styles.ButtonText}>I don't have an account</Text>{'\n'}{'\n'}Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFECEA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  TitleText: {
    fontSize: 40,
    fontWeight: 'bold',
    //fontFamily: 'Georgia',
    marginTop: 70,
    marginBottom: 5,
    //backgroundColor: '#1B8057',
    color: '#1B8057',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '90%',
    backgroundColor: 'white',

  },
  buttonSubmit: {
    backgroundColor: '#1B8057',
    padding: 10,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    //backgroundColor: '#273952',
    padding: 10,
    borderRadius: 15,
    width: '70%',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'center',
    //flex: 1,  
  },
  buttonSub: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#1B8057',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ButtonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },


  imagestyle: {
    // width: 300, // Set width as needed
    // height: 200, // Set height as needed
    // resizeMode: 'contain', // Or 'contain', 'stretch', etc. based on your requirement
    // borderRadius: 30, // Optional: add border radius for rounded corners
    // padding: 30,
    //marginTop: 10,
    //margin:5,
    // overflow: 'hidden',
    // //borderColor: 'red',
    // //borderWidth: '5',

    //borderColor: '#CFD4FF',
    borderWidth: 2,
    height: 250,
    //width: 300,
  }
});

export default LoginScreen;
