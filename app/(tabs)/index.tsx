import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const DESTINATIONS = [
  {
    id: '1',
    name: 'Lijiang Ancient Town',
    location: 'Yunnan, China',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Dali Old Town',
    location: 'Yunnan, China',
    image: 'https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?w=800',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Tiger Leaping Gorge',
    location: 'Yunnan, China',
    image: 'https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?w=800',
    rating: 4.9,
  },
];

function DestinationCard({ item }: { item: typeof DESTINATIONS[0] }) {
  const router = useRouter();

  return (
    <Pressable 
      style={styles.card}
      onPress={() => router.push(`/(tabs)/${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location" size={16} color="white" />
          <Text style={styles.location}>{item.location}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <FlashList
        data={DESTINATIONS}
        renderItem={({ item }) => <DestinationCard item={item} />}
        estimatedItemSize={300}
        showsVerticalScrollIndicator={false}
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
    height: 300,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: 'white',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    color: 'white',
    marginLeft: 4,
    fontWeight: '600',
  },
});