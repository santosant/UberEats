import { View, StyleSheet, Image, Text } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';

const restaurant = restaurants[0];

const Header = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>$ &#8226; {restaurant.rating} ⭐️ </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10
  },
  subtitle: {
    fontSize: 15,
    color: '#525252'
  },
  container: {
    margin: 10
  }
});

export default Header;
