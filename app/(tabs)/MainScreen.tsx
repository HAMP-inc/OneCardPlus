import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

const MainScreen: React.FC = ({ navigation }: any) => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Main Screen!</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default MainScreen;
