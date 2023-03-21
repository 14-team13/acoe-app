import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login'
import ACOE from './components/ACOE'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}  
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ACOE" component={ACOE} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;