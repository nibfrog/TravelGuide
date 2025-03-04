import { View, Text, StyleSheet } from 'react-native';

export default function TripsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Trips</Text>
      <Text style={styles.subtitle}>Your upcoming and past adventures</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});