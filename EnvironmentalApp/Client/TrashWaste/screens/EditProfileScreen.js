import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ActivityIndicator, Alert } from 'react-native';

const EditProfileScreen = () => {
    // Define state variables to store profile information
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [profileData, setProfileData] = useState(null); // Define profileData state variable

    // Function to handle saving edited profile data
    const handleEditTask = async () => {
        try {
            // Prepare the edited profile data
            const editedProfile = {
                firstname: firstName,
                lastname: lastName,
                username: userName,
                email: email,
                address: address,
                gender: gender,
                phone: phone
            };

            // Make a PUT request to your backend API to save the edited profile data
            const response = await axios.put(`${URL}/user-update/${profileData.user_Id}`, editedProfile);
            
            // Handle successful response
            console.log('Profile updated successfully:', response.data);
            Alert.alert('Success', 'Profile updated successfully.');

        } catch (error) {
            // Handle error
            console.error('Error updating profile:', error);
            Alert.alert('Error', 'Failed to update profile. Please try again later.');
        }
    };

    // Load user data from AsyncStorage when component mounts
    useEffect(() => {
        const loadData = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData !== null) {
                    const { firstname, lastname, username, email, gender, address, phone } = JSON.parse(userData);
                    setFirstName(firstname);
                    setLastName(lastname);
                    setUserName(username);
                    setEmail(email);
                    setAddress(address);
                    setGender(gender);
                    setPhone(phone);
                    setProfileData(JSON.parse(userData)); // Set profileData state variable
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error loading user data:', error);
                Alert.alert('Error', 'Failed to load user data. Please try again later.');
            }
        };
        loadData();
    }, []);

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {isLoading ? (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                ) : (
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                        <View style={styles.profileInfo}>
                            <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} placeholder="First Name" />
                            <TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder="Last Name" />
                            <TextInput style={styles.input} value={userName} onChangeText={setUserName} placeholder="Username" />
                            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
                            <TextInput style={styles.input} value={gender} onChangeText={setGender} placeholder="Gender" />
                            <TextInput style={styles.input} value={address} onChangeText={setAddress} placeholder="Address" />
                            <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone" />
                            <TouchableOpacity style={styles.button} onPress={handleEditTask}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                )}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        paddingLeft: 35,
        paddingRight: 35,
    },
    profileInfo: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 20,
        padding: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

export default EditProfileScreen;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Alert, Keyboard } from 'react-native';
// import axios from 'axios';

// const EditProfileScreen = ({ user_id }) => {
//     // State variables for profile information
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [userName, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [address, setAddress] = useState("");
//     const [gender, setGender] = useState("");
//     const [phone, setPhone] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     const handleEditProfile = async () => {
//         try {
//             if (!firstName || !lastName || !userName || !email || !address || !gender || !phone) {
//                 Alert.alert('Incomplete Data', 'Please fill in all fields.');
//                 return;
//             }

//             const updatedUserData = {
//                 firstName,
//                 lastName,
//                 userName,
//                 email,
//                 address,
//                 gender,
//                 phone
//             };

//             setIsLoading(true);

//             // Use axios.put for updating user data
//             try {
//                 setIsLoading(true); // Set loading state to true before making the request

//                 const response = await axios.put(`${URL}/user-update/${user_id}`, updatedUserData);

//                 if (response.status === 200) {
//                     Alert.alert('Profile Updated', 'Your profile has been successfully updated.');
//                 }
//             } catch (error) {
//                 console.error('Error updating profile:', error);
//                 Alert.alert('Error', 'Failed to update profile. Please try again later.');
//             } finally {
//                 setIsLoading(false); // Set loading state to false after the request is completed
//             }
        
//         };

//         return (
//             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//                 <ScrollView
//                     showsVerticalScrollIndicator={false}
//                     style={{ paddingHorizontal: 35 }}
//                 >
//                     <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
//                         <Text style={styles.title}>Edit Profile</Text>

//                         <TextInput
//                             style={styles.input}
//                             placeholder="First Name"
//                             onChangeText={(text) => setFirstName(text)}
//                             value={firstName}
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Last Name"
//                             onChangeText={(text) => setLastName(text)}
//                             value={lastName}
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Username"
//                             onChangeText={(text) => setUsername(text)}
//                             value={userName}
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Email"
//                             onChangeText={(text) => setEmail(text)}
//                             value={email}
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Gender"
//                             onChangeText={(text) => setGender(text)}
//                             value={gender}
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Address"
//                             onChangeText={(text) => setAddress(text)}
//                             value={address}
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Phone"
//                             onChangeText={(text) => setPhone(text)}
//                             value={phone}
//                         />

//                         <TouchableOpacity style={styles.addButton} onPress={handleEditProfile}>
//                             <Text style={styles.buttonText}>Save</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </ScrollView>
//             </TouchableWithoutFeedback>
//         );
//     };

//     const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             // paddingLeft: 35,
//             // paddingRight: 35,
//             backgroundColor: '#fff',
//         },
//         profileImage: {
//             width: 100,
//             height: 100,
//             borderRadius: 75,
//             marginBottom: 20,
//         },
//         profileInfo: {
//             width: '100%'
//         },
//         label: {
//             fontWeight: 'bold',
//         },
//         inputContainer: {
//             marginBottom: 25,
//         },
//         input: {
//             height: 40,
//             width: '100%',
//             borderColor: '#EEEEEE', // Input border color
//             borderBottomWidth: 2,
//         },

//         addButton: {
//             backgroundColor: '#1B8057',
//             padding: 13,  // All sides are 10
//             paddingHorizontal: 20,  // Left and right are 20
//             borderRadius: 15,
//             marginTop: 20,
//             width: '100%',
//             alignSelf: 'center'
//         },
//         buttonText: {
//             color: 'white',
//             textAlign: 'center',
//         },
//     })

//     export default EditProfileScreen;


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import ProfileScreen from './ProfileScreen';
// //import { styles } from './S'; // Import your styles file

// const EditProfileScreen = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [gender, setGender] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleEditProfile = () => {
//     console.log('First Name:', firstName);
//     console.log('Last Name:', lastName);
//     console.log('Username:', username);
//     console.log('Email:', email);
//     console.log('Gender:', gender);
//     console.log('Address:', address);
//     console.log('Phone:', phone);

//     // You can implement registration logic here
//   }

// // export default function EditProfileScreen() {
// //   return (
// //     <View>
// //       <Text>EditProfileScreen</Text>
// //     </View>
// //   )
// // },
// return (
//   <ScrollView showsVerticalScrollIndicator={false}>
//     <View style={styles.container}>
//       <Text style={styles.title}>Edit Profile</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="First Name"
//         onChangeText={(text) => setFirstName(text)}
//         value={firstName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Last Name"
//         onChangeText={(text) => setLastName(text)}
//         value={lastName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         onChangeText={(text) => setUsername(text)}
//         value={username}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Gender"
//         onChangeText={(text) => setGender(text)}
//         value={gender}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Address"
//         onChangeText={(text) => setAddress(text)}
//         value={address}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone"
//         onChangeText={(text) => setPhone(text)}
//         value={phone}
//       />

//       <TouchableOpacity style={styles.button} onPress={ProfileScreen}>
//         <Text style={styles.buttonText}>Update</Text>
//       </TouchableOpacity>
//     </View>
//   </ScrollView>
// );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     marginTop: 40,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     width: '80%',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     width: '80%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default EditProfileScreen;