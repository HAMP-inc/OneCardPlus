import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

const SignInScreen: React.FC = ({ navigation }: any) => {
  const { signIn, loading } = useAuth();

  const handleSignIn = () => {
    signIn();
    navigation.navigate("Main"); // Navigate to MainScreen after signing in
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In with Outlook</Text>
      <Button
        title={loading ? "Signing In..." : "Sign In"}
        onPress={handleSignIn}
        disabled={loading}
      />
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

export default SignInScreen;
