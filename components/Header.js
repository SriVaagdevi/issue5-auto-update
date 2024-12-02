import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo_sssa.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>ONDM 2025</Text>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.buttonText}>Submit a Paper</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Program')}>
        <Text style={styles.navItem}>Program</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#060c22',
  },
  logo: { width: 50, height: 50 },
  title: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  submitButton: {
    backgroundColor: '#ff8500',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
