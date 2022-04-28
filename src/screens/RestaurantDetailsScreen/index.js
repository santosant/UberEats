import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/DishListItem';
import Header from './Header';

const restaurant = restaurants[0];

const RestaurantDetailScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={Header}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Ionicons
        name='arrow-back-circle'
        size={45}
        color='white'
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailScreen;
