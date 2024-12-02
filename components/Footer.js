import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 ONDM. All Rights Reserved</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#101522',
    alignItems: 'center',
  },
  text: { color: '#eee', fontSize: 14 },
});
