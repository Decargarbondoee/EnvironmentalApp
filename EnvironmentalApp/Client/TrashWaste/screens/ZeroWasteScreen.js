import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hooks from react-navigation
import { Font } from 'expo-font';


const SubscriptionScreen = () => {
    const navigation = useNavigation(); // Get navigation object

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
                    source={require('../assets/ZeroWaste_Logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.companyName}>EcoWaste Solutions</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/ZeroWaste.jpg')}
                    style={styles.image}
                />
            </View>

            <Text style={styles.description}>
                EcoWaste Solutions is committed to providing environmentally friendly waste management solutions.EcoWaste Solutions is committed to providing environmentally friendly waste management solutions.
                EcoWaste Solutions is committed to providing environmentally friendly waste management solutions.EcoWaste Solutions is committed to providing environmentally friendly waste management solutions.{'\n'}{'\n'}
                EcoWaste Solutions is committed to providing environmentally friendly waste management solutions.EcoWaste Solutions is committed to providing environmentally friendly waste management solutions.
                EcoWaste Solutions is committed to providing environmentally friendly waste management solutions.EcoWaste Solutions is committed to providing environmentally friendly waste management solutions.{'\n'}{'\n'}
                EcoWaste Solutions is committed to providing environmentally friendly waste management solutions.EcoWaste Solutions is committed to providing environmentally friendly waste management solutions.
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
});

export default SubscriptionScreen;