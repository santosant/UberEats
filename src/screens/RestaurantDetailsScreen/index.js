import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
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

export default RestaurantDetailScreen;
