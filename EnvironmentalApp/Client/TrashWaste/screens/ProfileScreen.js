import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import getProfileData from '../services/ProfileScreenServices/services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileIcon from '../components/ProfileIcons';


const ProfileScreen = ({ navigation }) => {
    const [profileData, setProfileData] = useState(null);



    // Fetch user information when the component mounts
    useEffect(() => {
        const fetchProfile = async () => {
            try {

                const storedUserId = await AsyncStorage.getItem('UserId');
                const userIdInteger = parseInt(storedUserId, 10);
                const data = await getProfileData(userIdInteger);
                setProfileData(data);
                // console.log("get data");
                // console.log(profileData.firstname);
                // console.log("last data ok");
            } catch (error) {
                // Handle errors specific to fetching profile data, if necessary
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfile();
    }, []);
    if (!profileData) {
        // Render a loading indicator or placeholder while user information is being fetched
        return <ActivityIndicator />;
    }
    //const { user_id, firstName, lastName } = profileData;

    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
            </View>
            <View style={styles.profileOption}>
                <ProfileIcon textName={profileData.firstname} icon="user" />
                <ProfileIcon textName={profileData.lastname} icon="user" />
                <ProfileIcon textName={profileData.email} icon="mail" />
                <ProfileIcon textName={profileData.username} icon="user" />
                <ProfileIcon textName={profileData.address} icon="home" />
                
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('EditProfile')}
                >
                    <AntDesign name="edit" size={24} color="black" />
                    <Text style={styles.optionLabel}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('Login')}
                >
                    <MaterialIcons name="logout" size={24} color="black" />
                    <Text style={styles.optionLabel}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBox: {
        backgroundColor: '#1B8057',
        alignItems: "center",
        justifyContent: 'center',
        padding: 15,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: '10%'
    },
    profileName: {
        fontSize: 16,
        color: "#000",
        fontWeight: 'bold'
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff'
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 20,
    },
    profileOption: {
        // width: '80%',
        // justifyContent: "center",

        // padding: 30,
        paddingTop: 50,
        paddingHorizontal: 30,
        gap: 20
    },

    option: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#eee',
        padding: 5,
        // marginTop: 20,
        gap: 15
    },




    inputContainer: {
        marginBottom: 25,
    },

    value: {
        // marginBottom: 15,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#EEEEEE', // Input border color
        // borderWidth: 1,
        // borderRadius: 5,
        borderBottomWidth: 2,
        // marginTop: 15,
        // paddingHorizontal: 10,
        // color: '#eee'
    },
});

export default ProfileScreen;
