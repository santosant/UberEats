import { View, Image, Text } from 'react-native';
import { styles } from './styles';
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

export default Header;
