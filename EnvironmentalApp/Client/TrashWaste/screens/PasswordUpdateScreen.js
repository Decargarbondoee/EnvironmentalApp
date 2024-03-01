// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// //import styles from './styles'; // Import your stylesheet

// const ForgetPasswordScreen = ({ navigation }) => {
//   // const [username, setUserName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleResetPassword = () => {
//     // Validate input
//     if (!email) {
//       Alert.alert('Error', 'Please enter your username and email.');
//       return;
//     }

//     // Implement your logic to send a password reset link to the user's email
//     // For demonstration purposes, I'm just logging the data here
//     // console.log('Reset password for username:', username);
//     console.log('Reset password for email:', email);

//     // Provide feedback to the user
//     Alert.alert('Success', 'Password reset link sent to your email.');

//     // Optionally, navigate to a confirmation screen or display a message here
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Forgot Password</Text>

//       {/* <TextInput
//         style={styles.input}
//         placeholder="Enter User Name"
//         value={username}
//         onChangeText={setUserName}
//       /> */}

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />

//       <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
//         <Text style={styles.buttonText}>Reset Password</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.backToLoginButton}
//         onPress={() => navigation.navigate('Login')}
//       >
//         <Text style={styles.BackbuttonText}>Back to Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 20,
//     width: '100%',
//   },
//   resetButton: {
//     backgroundColor: '#1B8057',
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     alignItems: 'center',
//   },
//   backToLoginButton: {
//     marginTop: 20,
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     alignItems: 'center',
//     backgroundColor: '',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   BackbuttonText: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 18,
//   }
// });

// export default ForgetPasswordScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const ForgetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    console.log('Reset password for email:', email);

    // Display success alert
    Alert.alert('Success', 'Password reset link sent to your email.');

    // Set reset message
    setResetMessage('Please check your email for the reset link.');

    // Optionally, navigate to a confirmation screen or display a message here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

      <Text style={styles.resetMessage}>{resetMessage}</Text>

      <TouchableOpacity
        style={styles.backToLoginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    width: '100%',
  },
  resetButton: {
    backgroundColor: '#1B8057',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  backToLoginButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'blue', // Example background color
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  backButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  resetMessage: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ForgetPasswordScreen;
