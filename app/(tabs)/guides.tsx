import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Ionicons } from '@expo/vector-icons';

const GUIDES = [
  {
    id: '1',
    name: 'Wang Lei',
    specialty: 'Cultural Expert',
    location: 'Yunnan',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
    rating: 4.9,
    trips: 517,
  },
  {
    id: '2',
    name: 'Li Wei',
    specialty: 'Adventure Guide',
    location: 'Yunnan',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
    rating: 4.8,
    trips: 440,
  },
];

function GuideCard({ item }: { item: typeof GUIDES[0] }) {
  return (
    <Pressable style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.statText}>{item.rating}</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="map" size={16} color="#666" />
            <Text style={styles.statText}>{item.trips} trips</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="location" size={16} color="#666" />
            <Text style={styles.statText}>{item.location}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default function GuidesScreen() {
  return (
    <View style={styles.container}>
      <FlashList
        data={GUIDES}
        renderItem={({ item }) => <GuideCard item={item} />}
        estimatedItemSize={100}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  stats: {
    flexDirection: 'row',
    gap: 12,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
});