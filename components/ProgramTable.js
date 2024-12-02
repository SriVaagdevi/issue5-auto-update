import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProgramTable() {
  const [hoveredSession, setHoveredSession] = useState(null);

  const sessions = [
    { id: 1, title: 'Session 1: Optical Networks', abstract: 'Discussion on optical networks' },
    { id: 2, title: 'Session 2: Quantum Networking', abstract: 'Exploration of quantum networks' },
    { id: 3, title: 'Session 3: AI in Networking', abstract: 'AI-based network solutions' },
  ];

  return (
    <ScrollView horizontal={true}>
      <View style={styles.table}>
        {sessions.map((session) => (
          <TouchableOpacity
            key={session.id}
            onPress={() => alert(`Selected: ${session.title}`)}
            onMouseEnter={() => setHoveredSession(session.id)}
            onMouseLeave={() => setHoveredSession(null)}
            style={styles.row}
          >
            <Text style={styles.cell}>{session.title}</Text>
            {hoveredSession === session.id && (
              <Text style={styles.tooltip}>{session.abstract}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  table: {
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  row: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    position: 'relative',
  },
  cell: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tooltip: {
    position: 'absolute',
    top: 40,
    left: 10,
    backgroundColor: '#000',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
});
