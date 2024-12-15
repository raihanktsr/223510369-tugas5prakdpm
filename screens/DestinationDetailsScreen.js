import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DestinationDetailsScreen({ route }) {
  const { destination } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: destination.image }} style={styles.image} />
      <Text style={styles.title}>{destination.name}</Text>
      <Text style={styles.description}>Explore the beautiful sights and culture of {destination.name}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
