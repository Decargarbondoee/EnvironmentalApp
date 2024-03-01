import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hooks from react-navigation
import { Font } from 'expo-font';
import { Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const SubscriptionScreen = () => {
    const navigation = useNavigation(); // Get navigation object

    const handleLinkPress = (url) => {
        Linking.openURL(url);
    };

    // Mock data for subscription plans
    const subscriptionPlans = [
        { id: 1, name: 'Basic Plan', price: '$9.99/Weekly' },
        { id: 2, name: 'Premium Plan', price: '$19.99/month' },
        { id: 3, name: 'Pro Plan', price: '$29.99/Yearly' },
    ];

    // Function to navigate to subscription form with selected plan
    const handleSubscription = (plan) => {
        navigation.navigate('SubscriptionForm', { selectedPlan: plan });
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/mcc_logo.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.companyName}>Monrovia City Cooperation</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/MCC.jpg')}
                    style={styles.image}
                />
            </View>

            <Text style={styles.description}>
                WASTE MANAGEMENT IN MONROVIA: {'\n'}{'\n'}A COMMITMENT TO CLEANLINESS

                The Solid Waste Management Department within the Monrovia City Cooperation is dedicated to realizing a vision of a clean and healthy city, where waste is managed responsibly, collected efficiently, and disposed of sustainably. Our ultimate goal is to enhance the quality of life for all residents by ensuring a safe and hygienic environment.{'\n'}{'\n'}
                MISSION AND VISION{'\n'}{'\n'}

                Our department envisions a Monrovia where waste is managed in a sustainable and healthy manner. We are committed to collecting, processing, and disposing of waste responsibly, thereby contributing to a cleaner and healthier city for all.{'\n'}{'\n'}
                OBJECTIVES{'\n'}{'\n'}

                The Solid Waste Management Department plays a crucial role in the city's infrastructure by overseeing the sustainable management of solid waste. Our key objectives include:

                Promoting Public Health: We prioritize the health and well-being of our citizens by implementing comprehensive waste management strategies. This includes regular street cleaning initiatives to minimize environmental hazards and health risks associated with waste accumulation.

                Efficient Waste Collection and Transfer: We ensure the efficient collection and transfer of garbage from residential, commercial, and industrial areas to designated disposal sites. By maintaining a streamlined waste collection process, we aim to minimize littering and maintain cleanliness throughout the city.

                Encouraging Waste Reduction and Recycling: Our department is committed to promoting waste reduction, reuse, and recycling initiatives. By raising awareness and providing resources for recycling, we strive to minimize the amount of waste sent to landfills and contribute to environmental conservation efforts.

                Safe Composting and Disposal: We facilitate safe composting and disposal of solid waste and other hazardous substances that pose environmental and health risks. Through proper waste management practices, we mitigate potential pollution and protect natural ecosystems.{'\n'}{'\n'}

                COMMITMENT TO SUSTAINABILITY{'\n'}{'\n'}

                At the heart of our department's operations lies a commitment to sustainability. We recognize the importance of managing waste in a way that minimizes its impact on the environment and future generations. Through continuous innovation and adaptation of best practices, we strive to achieve our waste management goals while safeguarding the ecological integrity of our city.
            </Text>

            <Text style={styles.ImageTitle}>
                <Text>Contact Details</Text>{'\n'}
            </Text>
            <View style={styles.subscriptionType}>
                <Text style={styles.Imagetext}>
                    <MaterialIcons name="location-on" size={15} color="black" /><Text>Sinkor, Monrovia Liberia , Monrovia, Liberia</Text>
                </Text>
                <Text style={styles.Imagetext}>
                    <Ionicons name="call" size={15} color="black" /> <Text>077 739 1323</Text>
                </Text>
                <TouchableOpacity onPress={() => handleLinkPress('mailto:citycorporationofmonrovia@gmail.com')}>
                    <Text style={styles.Imagetext}>
                        <Entypo name="email" size={15} color="black" /> <Text style={styles.linkText}>citycorporationofmonrovia@gmail.com</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/p/Monrovia-City-Corporation-100069335374468/?_rdc=1&_rdr')}>
                    <Text style={styles.Imagetext}>
                        <FontAwesome name="facebook-f" size={15} color="black" /> <Text style={styles.linkText}>Monrovia City Corporation</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLinkPress('https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.monrovia.gov.lr%2F%3Ffbclid%3DIwAR33dgeMHC4tZ3irdIBWeh0OoFFvCnu9HaL8ti7q0oLvSI4h79_hwHoh1jY&h=AT3orGy61-VFaDgk_fjh90nvggiVm9EaWsM3fyC449Ejf6Z9c0ELeE98cb0v7g8-kA_5sQHrAo8ZbywvvOyMR8_tT18AwLs-dtE4OmMuaMO-Fe8B37fQbxE4KRPr64GuIR6CAw')}>
                    <Text style={styles.Imagetext}>
                        <Feather name="globe" size={15} color="black" />
                        <Text style={styles.linkText}>Monrovia City Corporation Website</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        //backgroundColor: '#F8EDE3',
    },
    header: {
        //flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    companyName: {
        fontSize: 20,
        fontWeight: 'bold',
        //fontFamily: 'Arial',
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 20, // Adjust the border radius if needed
        marginLeft: 'auto', // This will push the logo to the right
    },
    description: {
        fontSize: 12,
        marginBottom: 30,
        marginTop: 5,
        textAlign: 'justify',
        textDecorationStyle: 'double',
        textAlign: 'left',
        flexWrap: 'wrap',
    },

    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E5E1DA',
        padding: 30,
        marginBottom: 25,
    },

    subscriptionType: {
        //backgroundColor: '#EEF0E5',
        border: 25,
        borderColor: '#fff',
        borderRadius: 25,
        marginBottom: 50,
        //paddingLeft: 50,
    },
    subscriptionHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subscriptionPlan: {
        backgroundColor: '#273952',
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,

    },
    planTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    planPrice: {
        color: 'white',
        fontSize: 16,
        marginBottom: 4,
    },
    planDescription: {
        color: 'white',
        fontSize: 14,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    planContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        width: '80%',
    },
    planName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    planPrice: {
        fontSize: 16,
        color: 'gray',
    },

    ImageTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 1,
        //marginTop: 5,
        // Add more styling properties if needed
    },
    Imagetext: {
        flexDirection: 'row',
        //alignContent: 'Left',
        marginBottom: 5,
        marginTop: 1,
        paddingBottom: 0,
        // Add more styling properties if needed
    },
    linkText: {
        color: 'blue',
        //textDecorationLine: 'underline',
        // Add more styling properties if needed
    },

});

export default SubscriptionScreen;
