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
                    source={require('../assets/pcc_logo.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.companyName}>Paynesville City Cooperation</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/PCC.jpg')}
                    style={styles.image}
                />
            </View>

            <Text style={styles.description}>
            Paynesville City Corporation: Ensuring a Clean and Vibrant City Environment{'\n'}{'\n'}
            In the bustling urban landscape of Liberia, the Paynesville City Corporation (PCC) stands as a pivotal government entity tasked with the crucial responsibility of maintaining cleanliness and orderliness within the city. With a mandate to oversee waste management, sanitation, and urban development, the PCC plays a vital role in ensuring that Paynesville remains a clean, healthy, and vibrant place for its residents and visitors alike.{'\n'}{'\n'}
            Commitment to Cleanliness:
At the core of its mission, the Paynesville City Corporation is committed to upholding high standards of cleanliness throughout the city. Recognizing the importance of a clean environment for public health, quality of life, and economic prosperity, the PCC implements various initiatives and programs aimed at keeping the city streets, neighborhoods, and public spaces free of litter, debris, and other pollutants.{'\n'}{'\n'}
Waste Management and Sanitation:
One of the primary responsibilities of the Paynesville City Corporation is waste management and sanitation. Through the provision of waste collection services, the PCC ensures that garbage is promptly and properly disposed of, minimizing the risk of environmental pollution and disease transmission. Additionally, the corporation spearheads efforts to promote recycling, composting, and other sustainable waste management practices to reduce the volume of waste generated and minimize its impact on the environment.{'\n'}{'\n'}
Beautification and Urban Development:
In addition to waste management, the Paynesville City Corporation is actively involved in urban development and beautification projects aimed at enhancing the aesthetic appeal of the city. From the planting of trees and flowers to the maintenance of parks, green spaces, and public infrastructure, the PCC works tirelessly to create a more attractive and livable environment for residents and visitors alike.{'\n'}{'\n'}
Community Engagement and Participation:
The Paynesville City Corporation recognizes that keeping the city clean is a collective effort that requires the active participation of all stakeholders, including residents, businesses, and community organizations. As such, the PCC actively engages with the community through outreach programs, educational campaigns, and public awareness initiatives to foster a culture of environmental stewardship and civic responsibility.{'\n'}{'\n'}
Challenges and Opportunities:
While the Paynesville City Corporation has made significant strides in its efforts to keep the city clean, it also faces various challenges, including limited resources, inadequate infrastructure, and rapid urbanization. However, these challenges also present opportunities for innovation, collaboration, and creative solutions to improve waste management, sanitation, and urban development in Paynesville.

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
                    <MaterialIcons name="location-on" size={15} color="black" /><Text>Paynesville City, Liberia</Text>
                </Text>
                <Text style={styles.Imagetext}>
                    <Ionicons name="call" size={15} color="black" /> <Text>0776483663/07779 72852</Text>
                </Text>
                <TouchableOpacity onPress={() => handleLinkPress('mailto:paynesvillecitycorp@gmail.com')}>
                    <Text style={styles.Imagetext}>
                        <Entypo name="email" size={15} color="black" /> <Text style={styles.linkText}>paynesvillecitycorp@gmail.com</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/profile.php?id=100064917661051&sk=about_contact_and_basic_info')}>
                    <Text style={styles.Imagetext}>
                        <FontAwesome name="facebook-f" size={15} color="black" /> <Text style={styles.linkText}>Paynesville City Corporation</Text>
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
