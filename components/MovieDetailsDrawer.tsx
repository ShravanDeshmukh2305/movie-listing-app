import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

interface MovieDetailsDrawerProps {
    movie: Movie;
    onClose: () => void;
}

const MovieDetailsDrawer: React.FC<MovieDetailsDrawerProps> = ({ movie, onClose }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.content}>
                <Image source={{ uri: movie.Poster }} style={styles.poster} />
                <Text style={styles.title}>{movie.Title}</Text>
                <Text style={styles.meta}>{movie.Year} | {movie.Rated} | {movie.Runtime}</Text>
                <Text style={styles.genre}>{movie.Genre}</Text>
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="#FFD700" />
                    <Text style={styles.rating}>{movie.imdbRating}/10</Text>
                </View>
                <Text style={styles.plot}>{movie.Plot}</Text>
                <Text style={styles.director}>Director: {movie.Director}</Text>
                <Text style={styles.actors}>Actors: {movie.Actors}</Text>
                <View style={styles.imagesContainer}>
                    {movie.Images.map((image, index) => (
                        <Image key={index} source={{ uri: image }} style={styles.image} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        padding: 16,
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: 16,
    },
    content: {
        alignItems: 'center',
    },
    poster: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    meta: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 4,
    },
    genre: {
        color: '#e50914',
        fontSize: 14,
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 8,
    },
    rating: {
        color: '#FFD700',
        fontSize: 16,
        fontWeight: 'bold',
    },
    plot: {
        color: '#aaa',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 16,
    },
    director: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 4,
    },
    actors: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 16,
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
});

export default MovieDetailsDrawer;
