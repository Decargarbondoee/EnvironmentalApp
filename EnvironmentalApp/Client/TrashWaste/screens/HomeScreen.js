import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const HomeScreen = ({ navigation }) => {
    const handleGoBack = () => {
        navigation.goBack();
    };


    const handleLinkPress = (url) => {
        Linking.openURL(url);
    };

    const handleGoForward = () => {

        navigation.navigate('UserProfile');
    };

// Navigate to the various screen when the image is pressed
    const handleImageMccPress = () => {
        
        navigation.navigate('Mcc');
    };

    const handleImagePccPress = () => {
        
        navigation.navigate('Pcc');
    };

    const handleImageDumpPilePress = () => {
        
        navigation.navigate('DumpPile');
    };

    const handleImageGreenCityPress = () => {
        
        navigation.navigate('GreenCity');
    };

    const handleImageIswaPress = () => {
        
        navigation.navigate('Iswa');
    };

    const handleImageLibraPress = () => {
        
        navigation.navigate('Libra');
    };

    const handleImageSwaPress = () => {
        
        navigation.navigate('Swa');
    };

    const handleImageEWastePress = () => {
        
        navigation.navigate('EWaste');
    };

    const handleImageHysaaPress = () => {
        // Navigate to the 'GreenCity' screen when the image is pressed
        navigation.navigate('Hysaa');
    };

    const handleImageTranWastePress = () => {
        
        navigation.navigate('TranWaste');
    };

    const handleImageCityAlliancePress = () => {
        
        navigation.navigate('CityAlliance');
    };

    const handleImageZeroWastePress = () => {
        // Navigate to the 'GreenCity' screen when the image is pressed
        navigation.navigate('ZeroWaste');
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={handleGoBack}
                >
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.goForwardButton}
                    onPress={handleGoForward}
                >
                    <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>

                {/* <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('ProfileTab')}>
                    <Text style={styles.headerText}>User Profile</Text>
                </TouchableOpacity> */}
            </View>

            <View>
                <Text style={styles.title}>Companies in Sinkor</Text>
            </View>

            <ScrollView horizontal={true}>

                <View style={styles.Wrapcolor}>
                    <TouchableOpacity onPress={handleImageMccPress}>
                        <Image
                            source={require('../assets/MCC.jpg')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>Monrovia City Corp(MCC)</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>Sinkor, Monrovia Liberia , Monrovia, Liberia</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>077 739 1323</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:citycorporationofmonrovia@gmail.com')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>citycorporationofmonrovia@gmail.com</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/p/Monrovia-City-Corporation-100069335374468/?_rdc=1&_rdr')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>Monrovia City Corporation</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Wrapcolor}>
                    <TouchableOpacity onPress={handleImageDumpPilePress}>
                        <Image
                            source={require('../assets/Dumppilehero.jpg')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>SWAY SOLID WASTE</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>10th Street Sinkor, Monrovia, Liberia, 1000</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>0886312407 / 0770912040</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:ebondoe@gmail.com')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>ebondoe@gmail.com</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/people/Sway-Solid-Waste-Management-Solutions/100083175256930/?locale=ms_MY&paipv=0&eav=AfbIQIW5zuuayinXwNJ_t18ksQ9lca-El4FCPLhontO6vpivFD04SUTEZE9nYhFkZn0&_rdc=1&_rdr')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>Sway solid waste management solution</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Wrapcolor}>
                    <TouchableOpacity onPress={handleImageGreenCityPress}>
                        <Image
                            source={require('../assets/GreenCityNew.jpg')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>GREEN CITY</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>8th Street Sinkor, Monrovia, Liberia</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>077 018 2483</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:info@greencitiesinclr.com')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>info@greencitiesinclr.com</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/greencitiesinc')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>Green Cities Inc</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Wrapcolor}>
                    <TouchableOpacity onPress={handleImageIswaPress}>
                        <Image
                            source={require('../assets/ISWA1.jpg')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>Iswa</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>23th Street Sinkor, Monrovia, Liberia, 1000</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>0770416581</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:iswa@iswa.org')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>iswa@iswa.org</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/ISWA.org/?_rdc=1&_rdr')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>ISWA</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Wrapcolor}>
                    <TouchableOpacity onPress={handleImageLibraPress}>
                        <Image
                            source={require('../assets/LibraNew.jpg')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>LIBRA Sanitation Inc</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>19th Street Sinkor, Monrovia, Liberia, 1000</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>088 651 1921</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:librasaitation.com')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>librasaitation.com</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/profile.php?id=100063563797578')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>Libra Sanitation Inc.</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Wrapcolor}>
                    <TouchableOpacity onPress={handleImageSwaPress}>
                        <Image
                            source={require('../assets/SWA2.jpg')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>SWA</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>19th Street Sinkor, Monrovia, Liberia, 1000</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>088 651 1921</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:info@sanitationandwaterforall.org')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>info@sanitationandwaterforall.org</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/groups/sanitationandwaterforall')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>SWA</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >

            <View>
                <Text style={styles.title}>Companies in Paynesville</Text>
            </View>

            <ScrollView horizontal={true}>
                <View style={styles.Wrapcolor}>
                <TouchableOpacity onPress={handleImagePccPress}>
                        <Image
                            source={require('../assets/PCC.jpg')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>Paynesville City Corp</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>Paynesville City, Liberia</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>0776483663/07779 72852</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:paynesvillecitycorp@gmail.com')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>paynesvillecitycorp@gmail.com</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/profile.php?id=100064917661051&sk=about_contact_and_basic_info')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>Paynesville City Cooporation</Text>
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.Wrapcolor}>
                    <TouchableOpacity onPress={handleImageEWastePress}>
                        <Image
                            source={require('../assets/E-Waste.jpg')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>E-Waste</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>Joe Bar, Paynesville, Liberia</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>0770416581</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:ewaste@gmail.com')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>ewaste@gmail.com</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/RecycleEWaste/about_contact_and_basic_info')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>E_Waste</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Wrapcolor}>
                    <TouchableOpacity onPress={handleImageHysaaPress}>
                        <Image
                            source={require('../assets/Hysaa.png')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>Hysaa</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>Congo Town, Paynesville, Liberia</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>088 831 2232</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:hysaaliberia@yahoo.com')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>ebondoe@gmail.com</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/hysaaliberia')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>Hysaa Liberia Inc</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Wrapcolor}>
                    <TouchableOpacity onPress={handleImageTranWastePress}>
                        <Image
                            source={require('../assets/Waste.jpg')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>G-Waste</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>Duport Road, Paynesville City, Liberia</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>088 831 2232</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:transwaste@gmail.com')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>transwaste@gmail.com</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://web.facebook.com/p/Transwaste-Recycling-Aggregates-Ltd-100057740646497/?_rdc=1&_rdr')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>transwaste</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Wrapcolor}>
                    <TouchableOpacity onPress={handleImageCityAlliancePress}>
                        <Image
                            source={require('../assets/CityAlliance.jpg')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>CityAlliance</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>10th Street Sinkor, Monrovia, Liberia, 1000</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>0886312407 / 0770912040</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:ebondoe@gmail.com')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>ebondoe@gmail.com</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://www.facebook.com/emmettbondoe')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>Facebook: Emmett Bondoe</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Wrapcolor}>
                    <TouchableOpacity onPress={handleImageZeroWastePress}>
                        <Image
                            source={require('../assets/ZeroWaste.jpg')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.ImageTitle}>
                            <Text>Zero Waste</Text>
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.Imagetext}>
                        <MaterialIcons name="location-on" size={10} color="black" /><Text>10th Street Sinkor, Monrovia, Liberia, 1000</Text>
                    </Text>
                    <Text style={styles.Imagetext}>
                        <Ionicons name="call" size={10} color="black" /> <Text>0886312407 / 0770912040</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handleLinkPress('mailto:ebondoe@gmail.com')}>
                        <Text style={styles.Imagetext}>
                            <Entypo name="email" size={10} color="black" /> <Text style={styles.linkText}>ebondoe@gmail.com</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://www.facebook.com/emmettbondoe')}>
                        <Text style={styles.Imagetext}>
                            <FontAwesome name="facebook-f" size={10} color="black" /> <Text style={styles.linkText}>Facebook: Emmett Bondoe</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView >


        </View >


    );
};

// Styles remain unchanged
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 7,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        //flexDirection: 'row', // Arrange items in a row
        //alignItems: 'center', // Align items vertically in the center
        //marginBottom: 5, // Add margin bottom for spacing
    },
    header: {
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: "center"
    },

    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    subHeaderText: {
        fontSize: 16,
    },

    backButton: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#3498db', // or any color you prefer
        marginBottom: 15,
        fontWeight: 'bold',
    },

    goForwardButton: {
        padding: 5,
        borderRadius: 5,
        marginBottom: 15,
        fontWeight: 'bold',
        backgroundColor: '#3498db', // or any color you prefer
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#3E7C17',
        textAlign: 'center',
        //textDecorationLine: 'underline',
    },
    Wrapcolor: {
        backgroundColor: '#fff',
        height: '97%',
        marginTop: 5,
        marginBottom: 15,
        marginLeft: 10,
        borderRadius: 25,
        borderColor: '#CFD4FF',
        borderWidth: 5,

    },

    ImageTitle: {
        color: '#3E7C17',
        alignItems: 'center',
        paddingLeft: 15,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
    },

    linkText: {
        color: 'blue', // Change color to indicate it's a link
        textDecorationLine: 'underline', // Add underline for better indication
        marginLeft: 5, // Add margin left to separate icon and text
    },
    Imagetext: {
        color: 'black',
        alignContent: 'center',
        paddingLeft: 15,
        paddingBottom: 5,
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 0,
    },
    bodyheader: {
        marginBottom: 20,
        justifyContent: "space-between",
        alignContent: "space-around",
        paddingVertical: 10,
        margin: 5,
        width: '60%',
        borderColor: 'black',
    },

    imageStyle: {
        height: 120,
        width: 200,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E5E1DA",
        margin: 5, // Add margin right to separate image and text
        //marginLeft: 5, // Add margin right to separate image and text



    },
});
export default HomeScreen;


