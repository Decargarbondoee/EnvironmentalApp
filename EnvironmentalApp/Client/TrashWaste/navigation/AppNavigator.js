import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from 'react-native-paper';

import { AntDesign, MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

// Import your existing screen components here
import HomeScreen from '../screens/HomeScreen';
// import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen'; // Check the filename and the path here
//import SubscriptionScreen from '../screens/SubscriptionScreen';
import UpdateSubscriptionScreen from '../screens/UpdateSubscriptionScreen';
import SubscriptionFormScreen from '../screens/SubscriptionFormScreen';
import SubscriptionDetailsScreen from '../screens/SubscriptionDetailsScreen';
import PasswordUpdateScreen from '../screens/PasswordUpdateScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PaymentScreen from '../screens/PaymentScreen';
import CommentScreen from '../screens/CommentScreen';
import DumpPillScreen from '../screens/DumpPillScreen';
import GreenCityScreen from '../screens/GreenCityScreen';
import IswaScreen from '../screens/IswaScreen';
import LibraScreen from '../screens/LibraScreen';
import SwaScreen from '../screens/SwaScreen';
import EWasteScreen from '../screens/EWasteScreen';
import HysaaScreen from '../screens/HysaaScreen';
import TranWasteScreen from '../screens/TranWasteScreen';
import CityAllianceScreen from '../screens/CityAllianceScreen';
import ZeroWasteScreen from '../screens/ZeroWasteScreen';
import MccScreen from '../screens/MccScreen';
import PccScreen from '../screens/PccScreen';



const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const PaymentStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const SubscriptionStack = createNativeStackNavigator();
const LogStack = createNativeStackNavigator();

const AppNavigator = () => {
  const MainTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#3E7C17',
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            height: 80,
          },
        }}
      //initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => <AntDesign name="home" size={35} color="#fff" />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Payment"
          component={PaymentStackScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => <MaterialIcons name="payment" size={35} color="#fff" />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="UserProfile" // Rename to "UserProfile"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => <AntDesign name="user" size={35} color="#fff" />,
            headerShown: false,
            animation: 'none',
          }}
        />
        <Tab.Screen
          name="SubscriptionForm"
          component={SubscriptionStackScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => <MaterialIcons name="subscriptions" size={35} color="#fff" />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Login" headerMode="none">
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
        <AuthStack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{
            headerShown: false
          }}
        />
        <AuthStack.Screen
          name="Logout"
          component={LogoutScreen}
          options={{
            headerShown: false
          }}
        />
        <AuthStack.Screen
          name="PasswordUpdate"
          component={PasswordUpdateScreen}
          options={{
            headerShown: false
          }}
        />

        <AuthStack.Screen
          name="Register"
          component={LogoutScreen}
          options={{
            headerShown: false
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomeStack"
      component={HomeScreen}
      options={{
        title: 'Home Screen',
        animation: 'none',
        headerBackTitleVisible: true,
        headerShown: false,
      }}
    />

    <HomeStack.Screen
      name="Mcc"
      component={MccScreen}
      options={{
        title: '',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />
    <HomeStack.Screen
      name="DumpPile"
      component={DumpPillScreen}
      options={{
        title: '',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />

    <HomeStack.Screen
      name="GreenCity"
      component={GreenCityScreen}
      options={{
        title: '',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />

    <HomeStack.Screen
      name="Iswa"
      component={IswaScreen}
      options={{
        title: '',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />

    <HomeStack.Screen
      name="Libra"
      component={LibraScreen}
      options={{
        title: '',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />

    <HomeStack.Screen
      name="Swa"
      component={SwaScreen}
      options={{
        title: 'Swa',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />

    <HomeStack.Screen
      name="Pcc"
      component={PccScreen}
      options={{
        title: '',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />
    <HomeStack.Screen
      name="EWaste"
      component={EWasteScreen}
      options={{
        title: 'E-Waste',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />

    <HomeStack.Screen
      name="Hysaa"
      component={HysaaScreen}
      options={{
        title: 'Hysaa',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />

    <HomeStack.Screen
      name="TranWaste"
      component={TranWasteScreen}
      options={{
        title: 'TranWaste',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />

    <HomeStack.Screen
      name="CityAlliance"
      component={CityAllianceScreen}
      options={{
        title: 'City Alliance',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />

    <HomeStack.Screen
      name="ZeroWaste"
      component={ZeroWasteScreen}
      options={{
        title: 'Zero Waste',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />
  </HomeStack.Navigator>
);

const PaymentStackScreen = () => (
  <PaymentStack.Navigator>
    <PaymentStack.Screen
      name="Payment"
      component={PaymentScreen}
      options={{
        title: 'Payment',
        animation: 'none',
        headerTitleAlign: 'center',
      }}
    />
  </PaymentStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        headerShadowVisible: false,
        animation: 'none',
        headerStyle: {
          backgroundColor: '#094FAF',
        },
        headerTitleStyle: {
          color: '#fff',
        },
      }}
    />
    <ProfileStack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        title: 'Profile',
        animation: 'none',
        headerBackTitleVisible: false,
      }}
    />
  </ProfileStack.Navigator>
);

const SubscriptionStackScreen = () => (
  <SubscriptionStack.Navigator>
    <SubscriptionStack.Screen
      name="Subscribe"
      component={SubscriptionFormScreen}
      options={{
        headerShown: false,
        headerShadowVisible: false,
        animation: 'none',
        headerStyle: {
          backgroundColor: '#094FAF',
        },
        headerTitleStyle: {
          color: '#fff',
        },
      }}
    />
    <SubscriptionStack.Screen
      name="UpdateSubscription"
      component={UpdateSubscriptionScreen}
      options={{
        title: 'Update Subscription',
        animation: 'none',
        headerBackTitleVisible: false,
      }}
    />

    <SubscriptionStack.Screen
      name="SubscriptionDetails"
      component={SubscriptionDetailsScreen}
      options={{
        title: 'Subscription Details',
        animation: 'none',
        headerBackTitleVisible: false,
      }}
    />

    <SubscriptionStack.Screen
      name="SubscriptionForm"
      component={SubscriptionFormScreen}
      options={{
        title: 'Subscription Form',
        animation: 'none',
        headerBackTitleVisible: false,
      }}
    />
  </SubscriptionStack.Navigator>
);

export default AppNavigator;
