import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgramTable from '../components/ProgramTable';

export default function ProgramScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Program Schedule</Text>
      <ProgramTable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});
