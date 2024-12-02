import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Hero() {
  return (
    <ImageBackground
      source={require('../assets/images/hero-bg.jpg')}
      style={styles.container}
    >
      <Text style={styles.title}>29th International Conference</Text>
      <Text style={styles.subtitle}>
        Optical Network Design and Modelling (ONDM 2025)
      </Text>
      <Text style={styles.date}>May 6-9, 2025 - Pisa, Italy</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  subtitle: { fontSize: 18, color: '#ff8500', marginTop: 10 },
  date: { fontSize: 16, color: '#fff', marginTop: 10 },
});
