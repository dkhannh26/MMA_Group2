import { Input, List } from '@ant-design/react-native';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const hotels = [
        {
            id: '1',
            name: 'Style Lagoon Residences And Suites',
            image: 'https://randomuser.me/api/portraits/men/8.jpg',
            price: '$1450',
            rating: '4.0',
            stars: '⭐⭐⭐⭐',
            type: '2-star hotel',
        },
        {
            id: '2',
            name: 'MEME Lagoon Residences And Suites',
            image: 'https://randomuser.me/api/portraits/men/8.jpg',
            price: '$1450',
            rating: '4.0',
            stars: '⭐⭐⭐⭐',
            type: '2-star hotel',
        },
        {
            id: '3',
            name: 'Style Lagoon Residences And Suites',
            image: 'https://randomuser.me/api/portraits/men/8.jpg',
            price: '$1450',
            rating: '4.0',
            stars: '⭐⭐⭐⭐',
            type: '2-star hotel',
        },
        {
            id: '4',
            name: 'Style Lagoon Residences And Suites',
            image: 'https://randomuser.me/api/portraits/men/8.jpg',
            price: '$1450',
            rating: '4.0',
            stars: '⭐⭐⭐⭐',
            type: '2-star hotel',
        },
        {
            id: '5',
            name: 'Style Lagoon Residences And Suites',
            image: 'https://randomuser.me/api/portraits/men/8.jpg',
            price: '$1450',
            rating: '4.0',
            stars: '⭐⭐⭐⭐',
            type: '2-star hotel',
        },
        {
            id: '6',
            name: 'Style Lagoon Residences And Suites',
            image: 'https://randomuser.me/api/portraits/men/8.jpg',
            price: '$1450',
            rating: '4.0',
            stars: '⭐⭐⭐⭐',
            type: '2-star hotel',
        },
    ]
    const filteredHotels = hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const HotelCard = ({ hotel }) => (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: hotel.image }} style={styles.image} />
                <View style={styles.priceTag}>
                    <Text style={styles.priceText}>{hotel.price}</Text>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.hotelName}>{hotel.name}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{hotel.rating}</Text>
                    <Text style={styles.stars}>{hotel.stars}</Text>
                    <Text style={styles.hotelType}>{hotel.type}</Text>
                </View>
            </View>
        </View>
    );

    const navigator = useNavigation()
    return (
        <View style={styles.bg}>
            <ScrollView>
                <View style={{ paddingHorizontal: 20 }}>
                    <List.Item style={{ borderRadius: 30 }}>
                        <Input
                            style={{ borderRadius: 100 }}
                            prefix={<Feather name="search" size={24} color="black" />}
                            suffix={<Fontisto name="nav-icon-list-a" size={17} color="black" />}
                            placeholder="Discover a city"
                            value={searchQuery}
                            onChangeText={text => setSearchQuery(text)}
                        />
                    </List.Item>
                </View>
                <FlatList
                    data={filteredHotels}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigator.navigate('Booking', {
                                    imageUri: item.image,
                                    price: item.price,
                                    hotelName: item.name,
                                    rating: item.rating,
                                    stars: item.stars,
                                    hotelType: item.type,
                                });
                            }}
                        >
                            <HotelCard hotel={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginVertical: 20,
        marginTop: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        display: 'flex',
        flexDirection: "column",
    },
    headerIcon: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        // height: '100%',
        flex: 1,
        backgroundColor: 'white',
    },
    center: {
        justifyContent: 'center',
        textAlign: 'center'
    },
    filterItem: {
        marginVertical: 20,
        marginHorizontal: 5,
        // width: 125,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 0.32
    },
    carousel: {
        justifyContent: 'center',
        height: 350,
        width: '100%'
    },
    feature: {
        paddingHorizontal: 20,
        marginTop: 70
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    slider: {
        marginTop: 30
    },
    sliderItem: {
        width: 280,
        height: 350
    },
    sliderImage: {
        width: 270,
        height: 340,
        borderRadius: 20
    },
    popular: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    addresses: {
        flexDirection: 'row',
        marginTop: 30
    },
    address: {
        width: 100,
        height: 150,
        alignItems: 'center',
        marginRight: 20
    },
    selected: {
        backgroundColor: 'black',
    },
    textSelected: {
        color: 'white'
    },
    comment: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'white',
        height: 150,
        width: 240,
        left: '-50%',
        transform: [
            { translateX: -125 },
        ],
        borderRadius: 20,
        padding: 14,

    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        backgroundColor: '#fff',
        elevation: 4, // Để tạo bóng mờ
        margin: 20,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 200,  // Chiều cao ảnh
    },
    priceTag: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    priceText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    infoContainer: {
        padding: 15,
    },
    hotelName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 14,
        color: '#555',
        marginRight: 5,
    },
    stars: {
        fontSize: 14,
        color: 'gold',
        marginRight: 10,
    },
    hotelType: {
        position: 'absolute',
        right: 10,
        alignItems: 'left',
        fontSize: 14,
        color: '#888',
    },


})

export default Home;