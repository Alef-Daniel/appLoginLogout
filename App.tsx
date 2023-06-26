import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import Home from './src/pages/Home';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  
  return (
<NavigationContainer >
    <Stack.Navigator  screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen  name='Login' component={Login}></Stack.Screen>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
    </Stack.Navigator>
</NavigationContainer> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})