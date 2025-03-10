import { StyleSheet, Text, FlatList, Image, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useCartStore from '@/Store/CartStore';
import { Product } from '@/Store/Interfaces'; // Adjust the path accordingly

export default function TabTwoScreen() {
  const { product, reduceProduct } = useCartStore();
  console.log(product); // For debugging purposes

  const handleRemove = (item) => {
    Alert.alert(
      "Remove Item",
      `Are you sure you want to remove ${item.Title} from your cart?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Remove",
          onPress: () => reduceProduct(item), // Call the reduceProduct function from Zustand store
          style: "destructive"
        }
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.Images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.cartItemImage} />
        ))}
      </ScrollView>
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemTitle}>{item.Title}</Text>
        <Text style={styles.cartItemDescription}>{item.Year} | {item.Rated} | {item.Runtime}</Text>
        <Text style={styles.cartItemDescription}>{item.Genre}</Text>
        <Text style={styles.cartItemDescription}>Director: {item.Director}</Text>
        <Text style={styles.cartItemDescription}>Actors: {item.Actors}</Text>
        <Text style={styles.cartItemDescription}>{item.Plot}</Text>
        <Text style={styles.cartItemQuantity}>Qty: {item.quantity}</Text>
        <Text style={styles.cartItemPrice}>Rating: {item.imdbRating}/10</Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemove(item)}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Your Favorites</Text>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdbID}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    margin: 20,
    textAlign: 'center',
    color: '#E50914',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  cartItemContainer: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#1E1E1E',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  cartItemImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  cartItemDetails: {
    marginTop: 10,
  },
  cartItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cartItemDescription: {
    fontSize: 14,
    color: '#AAAAAA',
    marginBottom: 2,
  },
  cartItemQuantity: {
    fontSize: 16,
    color: '#E50914',
    marginTop: 5,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E50914',
    marginTop: 5,
  },
  removeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#E50914',
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
