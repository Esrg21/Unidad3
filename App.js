import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';
import OffersScreen from './src/screens/Offers';
import SellScreen from './src/screens/Sell';
import SettingScreen from './src/screens/Setting';
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/SignUp';
import ForgotPasswordScreen from './src/screens/ForgotPassword';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = focused ? 'ios-home' : 'ios-home-outline';
          else if (route.name === 'Profile') iconName = focused ? 'ios-person' : 'ios-person-outline';
          else if (route.name === 'Offers') iconName = focused ? 'ios-pricetag' : 'ios-pricetag-outline';
          else if (route.name === 'Sell') iconName = focused ? 'ios-cart' : 'ios-cart-outline';
          else if (route.name === 'Settings') iconName = focused ? 'ios-settings' : 'ios-settings-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: 'tomato',
        drawerInactiveTintColor: 'gray',
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Offers" component={OffersScreen} />
      <Drawer.Screen name="Sell" component={SellScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

