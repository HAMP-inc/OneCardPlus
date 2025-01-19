import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./(tabs)/SignInScreen";
import MainTabs from "./(tabs)/MainTabs";

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
