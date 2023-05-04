import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Timetable from "./screens/Timetable";
import React from 'react';
import Profile from "./screens/Profile";
import Query from "./screens/Query";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={ LoginScreen } />
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Timetable" component={ Timetable } />
        <Stack.Screen name="Profile" component={ Profile } />
        <Stack.Screen name="Query" component={ Query } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;