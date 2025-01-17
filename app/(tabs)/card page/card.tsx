import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Jane Smith</Text> {/* Hardcoded Name */}
      <Text style={styles.id}>ID: 98765</Text>    {/* Hardcoded ID */}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // For Android shadow
    alignItems: 'center',
    marginVertical: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  id: {
    fontSize: 18,
    color: '#555',
  },
});
