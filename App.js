import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import ToDoListScreen from './screens/ToDoListScreen';
import AboutScreen from './screens/AboutScreen';
import ProfileScreen from './screens/ProfileScreen'; // Placeholder Profile screen
import SettingsScreen from './screens/SettingsScreen'; // Placeholder Settings screen

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Main stack navigator for screens
const MainStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ToDoList" component={ToDoListScreen} />
    <Stack.Screen name="About" component={AboutScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="right" // Place drawer on the right side
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#e6e6e6',
            width: 240,
          },
          headerShown: false, // Hide default header for drawer screens
        }}
      >
        {/* Drawer screens */}
        <Drawer.Screen name="Main" component={MainStack} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
