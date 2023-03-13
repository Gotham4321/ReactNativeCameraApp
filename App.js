import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gallery } from "./src/component/gallery/Gallery";
import { Home } from "./src/component/Home";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Gallery" component={Gallery} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;

