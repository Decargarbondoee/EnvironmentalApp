import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hooks from react-navigation
import { Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const SubscriptionScreen = () => {
    const navigation = useNavigation(); // Get navigation object

    const handleLinkPress = (url) => {
        Linking.openURL(url);
    };

    // Mock data for subscription plans(30% cut for monthly and yearly payment)
    const subscriptionPlans = [
        { id: 1, name: 'Basic Plan', price: 'L$400/Weekly' },
        { id: 2, name: 'Premium Plan', price: 'L$1,120/month' },
        { id: 3, name: 'Pro Plan', price: 'L$13,440/Yearly' },
    ];

    // Function to navigate to subscription form with selected plan
    const handleSubscription = (plan) => {
        navigation.navigate('SubscriptionForm', { selectedPlan: plan });
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/Green_Logo.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.companyName}>Green Cities Inc</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/GreenCityNew.jpg')}
                    style={styles.image}
                />
            </View>

            <Text style={styles.description}>
            Pioneering a Clean and Sustainable Future Through Waste Recycling{'\n'}{'\n'}
            Green Cities Liberia is not just a waste management initiative; it is a catalyst for change, inspiring communities to rethink their relationship with waste and embrace a more sustainable way of life. As the organization continues to expand its reach and influence, it is paving the way for a cleaner, greener, and more prosperous future for Liberia and beyond. With its unwavering dedication to its mission and vision, Green Cities Liberia is proving that a sustainable future is not just possible—it's within our grasp.

            </Text>

            <View style={styles.subscriptionType}>
                <Text style={styles.title}>Subscription Plans</Text>
                {subscriptionPlans.map((plan) => (
                    <TouchableOpacity
                        key={plan.id}
                        style={styles.planContainer}
                        onPress={() => handleSubscription(plan)}
                    >
                        <Text style={styles.planName}>{plan.name}</Text>
                        <Text style={styles.planPrice}>{plan.price}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.ImageTitle}>
                <Text>Contact Details</Text>{'\n'}
            </Text>
            <View style={styles.subscriptiontype}>
                <Text style={styles.Imagetext}>
                    <MaterialIcons name="location-on" size={15} color="black" /><Text>8th Street Sinkor, Monrovia, Liberia</Text>
                </Text>
                <Text style={styles.Imagetext}>
                    <Ionicons name="call" size={15} color="black" /> <Text>077 018 2483</Text>
                </Text>
                <TouchableOpacity onPress={() => handleLinkPress('mailto:info@greencitiesinclr.com')}>
                    <Text style={styles.Imagetext}>
                        <Entypo name="email" size={15} color="black" /> <Text style={styles.linkText}>info@greencitiesinclr.com</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/greencitiesinc')}>
                    <Text style={styles.Imagetext}>
                        <FontAwesome name="facebook-f" size={15} color="black" /> <Text style={styles.linkText}>Green Cities Inc</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLinkPress('https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.monrovia.gov.lr%2F%3Ffbclid%3DIwAR33dgeMHC4tZ3irdIBWeh0OoFFvCnu9HaL8ti7q0oLvSI4h79_hwHoh1jY&h=AT3orGy61-VFaDgk_fjh90nvggiVm9EaWsM3fyC449Ejf6Z9c0ELeE98cb0v7g8-kA_5sQHrAo8ZbywvvOyMR8_tT18AwLs-dtE4OmMuaMO-Fe8B37fQbxE4KRPr64GuIR6CAw')}>
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
        //textAlign:'justify',
        textDecorationStyle: 'double',
        textAlign: 'left',
    },
    imageContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // marginBottom: 16,
        // padding: 10,
        // marginRight: 50,


    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        border: 25,
        borderWidth: 1,
        borderColor: '#E5E1DA',
        padding: 30,
        marginBottom: 25,
    },

    subscriptionType: {
        backgroundColor: '#EEF0E5',
        border: 25,
        borderColor: '#fff',
        borderRadius: 25,
        marginBottom: 50,
        paddingLeft: 50,
    },
    subscriptiontype: {
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
        //alignItem: 'Left',
        marginBottom: 5,
        marginTop: 1,
        //paddingBottom: 0,
        // Add more styling properties if needed
    },
    linkText: {
        color: 'blue',
        //textDecorationLine: 'underline',
        // Add more styling properties if needed
    },
});

export default SubscriptionScreen;