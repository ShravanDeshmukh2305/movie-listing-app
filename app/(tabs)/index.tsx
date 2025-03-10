
// import useCartStore from '@/Store/CartStore';
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   SafeAreaView,
//   TextInput,
//   Keyboard,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import MovieData from './../../Store/Movie.json'; // Import your local movie data

// interface Movie {
//   Title: string;
//   Year: string;
//   Rated: string;
//   Runtime: string;
//   Genre: string;
//   Director: string;
//   Actors: string;
//   Plot: string;
//   Poster: string;
//   imdbRating: string;
//   imdbID: string;
//   Images: string[];
// }

// export default function HomeScreen() {
//   const [movies] = useState<Movie[]>(MovieData.MovieData);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortCriteria, setSortCriteria] = useState<'date' | 'rating'>('date');
//   const { addProduct, product } = useCartStore();

//   const handleSearch = (text: string) => {
//     setSearchQuery(text);
//   };

//   const handleSort = () => {
//     setSortCriteria((prev) => (prev === 'date' ? 'rating' : 'date'));
//   };

//   const filteredMovies = movies
//     .filter((movie) =>
//       movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortCriteria === 'date') {
//         return parseInt(b.Year) - parseInt(a.Year);
//       } else {
//         return parseFloat(b.imdbRating) - parseFloat(a.imdbRating);
//       }
//     });

//   const renderMovie = ({ item }: { item: Movie }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: item.Poster }} style={styles.poster} />
//       <View style={styles.movieInfo}>
//         <Text style={styles.title}>{item.Title}</Text>
//         <View style={styles.metaContainer}>
//           <Text style={styles.year}>{item.Year}</Text>
//           <Text style={styles.rated}>{item.Rated}</Text>
//           <Text style={styles.runtime}>{item.Runtime}</Text>
//         </View>
//         <Text style={styles.genre}>{item.Genre}</Text>
//         <View style={styles.ratingContainer}>
//           <Icon name="star" size={16} color="#FFD700" />
//           <Text style={styles.rating}>{item.imdbRating}/10</Text>
//         </View>
//         <Text style={styles.plot} numberOfLines={3}>{item.Plot}</Text>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => addProduct(item)}
//           >
//             <Text style={styles.buttonText}>Add Watch List</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Movie Collection</Text>
//         <View style={styles.iconGroup}>
//           <TouchableOpacity style={styles.iconButton} onPress={handleSort}>
//             <Icon name="swap-vertical" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.iconButton}>
//             <Icon name="heart-outline" size={24} color="#fff" />
//             {product.length > 0 && (
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>{product.length}</Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search movies..."
//           value={searchQuery}
//           onChangeText={handleSearch}
//           onSubmitEditing={Keyboard.dismiss}
//         />
//       </View>
//       <FlatList
//         data={filteredMovies}
//         renderItem={renderMovie}
//         keyExtractor={(item) => item.imdbID}
//         contentContainerStyle={styles.listContent}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1a1a1a',
//     paddingTop: 20, // Add space from the top
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#2a2a2a',
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   iconGroup: {
//     flexDirection: 'row',
//     gap: 16,
//   },
//   iconButton: {
//     position: 'relative',
//     padding: 4,
//   },
//   badge: {
//     position: 'absolute',
//     top: -4,
//     right: -4,
//     backgroundColor: '#e50914',
//     borderRadius: 8,
//     minWidth: 16,
//     height: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 4,
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   searchContainer: {
//     paddingHorizontal: 16,
//     marginBottom: 16,
//   },
//   searchInput: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//     color: '#333',
//   },
//   listContent: {
//     padding: 16,
//   },
//   card: {
//     backgroundColor: '#2a2a2a',
//     borderRadius: 12,
//     marginBottom: 16,
//     overflow: 'hidden',
//     flexDirection: 'row',
//     height: 200,
//   },
//   poster: {
//     width: 140,
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   movieInfo: {
//     flex: 1,
//     padding: 12,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 8,
//   },
//   metaContainer: {
//     flexDirection: 'row',
//     gap: 8,
//     marginBottom: 8,
//   },
//   year: {
//     color: '#ccc',
//     fontSize: 12,
//   },
//   rated: {
//     color: '#ccc',
//     fontSize: 12,
//   },
//   runtime: {
//     color: '#ccc',
//     fontSize: 12,
//   },
//   genre: {
//     color: '#e50914',
//     fontSize: 12,
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//     marginBottom: 8,
//   },
//   rating: {
//     color: '#FFD700',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   plot: {
//     color: '#aaa',
//     fontSize: 12,
//     lineHeight: 16,
//     flex: 1,
//   },
//   buttonContainer: {
//     marginTop: 8,
//   },
//   button: {
//     backgroundColor: '#e50914',
//     paddingVertical: 8,
//     borderRadius: 6,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
// });


import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Keyboard,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieData from './../../Store/Movie.json';
import useCartStore from '@/Store/CartStore';
import MovieDetailsDrawer from "./../../components/MovieDetailsDrawer" // Import the drawer component

interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
  Images: string[];
}

export default function HomeScreen() {
  const [movies] = useState<Movie[]>(MovieData.MovieData);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState<'date' | 'rating'>('date');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const { addProduct, product } = useCartStore();

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleSort = () => {
    setSortCriteria((prev) => (prev === 'date' ? 'rating' : 'date'));
  };

  const filteredMovies = movies
    .filter((movie) =>
      movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortCriteria === 'date') {
        return parseInt(b.Year) - parseInt(a.Year);
      } else {
        return parseFloat(b.imdbRating) - parseFloat(a.imdbRating);
      }
    });

  const handleMoviePress = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDrawer = () => {
    setSelectedMovie(null);
  };

  const renderMovie = ({ item }: { item: Movie }) => (
    <TouchableOpacity onPress={() => handleMoviePress(item)}>
      <View style={styles.card}>
        <Image source={{ uri: item.Poster }} style={styles.poster} />
        <View style={styles.movieInfo}>
          <Text style={styles.title}>{item.Title}</Text>
          <View style={styles.metaContainer}>
            <Text style={styles.year}>{item.Year}</Text>
            <Text style={styles.rated}>{item.Rated}</Text>
            <Text style={styles.runtime}>{item.Runtime}</Text>
          </View>
          <Text style={styles.genre}>{item.Genre}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{item.imdbRating}/10</Text>
          </View>
          <Text style={styles.plot} numberOfLines={3}>{item.Plot}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => addProduct(item)}
            >
              <Text style={styles.buttonText}>Add to Watch List</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Movie Collection</Text>
        <View style={styles.iconGroup}>
          <TouchableOpacity style={styles.iconButton} onPress={handleSort}>
            <Icon name="swap-vertical" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="heart-outline" size={24} color="#fff" />
            {product.length > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{product.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search movies..."
          value={searchQuery}
          onChangeText={handleSearch}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <FlatList
        data={filteredMovies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.imdbID}
        contentContainerStyle={styles.listContent}
      />
      <Modal visible={selectedMovie !== null} animationType="slide" transparent>
        <MovieDetailsDrawer movie={selectedMovie!} onClose={handleCloseDrawer} />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2a2a2a',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    position: 'relative',
    padding: 4,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#e50914',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    height: 200,
  },
  poster: {
    width: 140,
    height: '100%',
    resizeMode: 'cover',
  },
  movieInfo: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  year: {
    color: '#ccc',
    fontSize: 12,
  },
  rated: {
    color: '#ccc',
    fontSize: 12,
  },
  runtime: {
    color: '#ccc',
    fontSize: 12,
  },
  genre: {
    color: '#e50914',
    fontSize: 12,
    marginBottom: 8,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  rating: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
  },
  plot: {
    color: '#aaa',
    fontSize: 12,
    lineHeight: 16,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 8,
  },
  button: {
    backgroundColor: '#e50914',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
