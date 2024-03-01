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
                    source={require('../assets/swa.png')}
                    style={styles.logo}
                />
                <Text style={styles.companyName}>Sanitation and Water for All </Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/SWA2.jpg')}
                    style={styles.image}
                />
            </View>

            <Text style={styles.description}>
            Sanitation and Water for All in Liberia: A Vision for Sustainable Development{'\n'}{'\n'}
            Sanitation and water for all in Liberia represent a vital component of the country's efforts to achieve sustainable development and improve the quality of life for its citizens. With a clear vision, defined objectives, and ambitious goals, Liberia is committed to addressing the challenges of water and sanitation access and ensuring that no one is left behind. By working collaboratively with national and international partners, leveraging innovative solutions, and empowering communities, Liberia is making significant strides towards realizing its vision of sanitation and water for all.

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
                    <MaterialIcons name="location-on" size={15} color="black" /><Text>19th Street Sinkor, Monrovia, Liberia, 1000</Text>
                </Text>
                <Text style={styles.Imagetext}>
                    <Ionicons name="call" size={15} color="black" /> <Text>088 651 1921</Text>
                </Text>
                <TouchableOpacity onPress={() => handleLinkPress('mailto:info@sanitationandwaterforall.org')}>
                    <Text style={styles.Imagetext}>
                        <Entypo name="email" size={15} color="black" /> <Text style={styles.linkText}>info@sanitationandwaterforall.org</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/groups/sanitationandwaterforall')}>
                    <Text style={styles.Imagetext}>
                        <FontAwesome name="facebook-f" size={15} color="black" /> <Text style={styles.linkText}>SWA</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLinkPress('http://www.sanitationandwaterforall.org/')}>
                    <Text style={styles.Imagetext}>
                        <Feather name="globe" size={15} color="black" />
                        <Text style={styles.linkText}>SWA</Text>
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

subscriptiontype: {
        //backgroundColor: '#EEF0E5',
        border: 25,
        borderColor: '#fff',
        borderRadius: 25,
        marginBottom: 50,
        //paddingLeft: 50,
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