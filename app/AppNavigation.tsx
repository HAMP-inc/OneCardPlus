import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./(tabs)/SignInScreen";
import MainTabs from "./(tabs)/MainTabs"; // Import MainTabs

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen
        name="Main"
        component={MainTabs} // Use MainTabs instead of MainScreen
        options={{ headerShown: false }} // Hide header for tab navigator
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
