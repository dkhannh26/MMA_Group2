import { FontAwesome, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const flatListData = [
    { id: 'descriptionTitle', type: 'title', text: 'Description' },
    {
        id: 'descriptionContent',
        type: 'text',
        text: 'Museum focusing on local indigenous people & culture, with all tools, clothing & artifacts on display. Don bosco to museum',
    },
    { id: 'Amenities', type: 'Amenities', text: 'Amenities' },
    {
        id: 'amenitiesRow1',
        type: 'AmenitiesItem',
        data: [
            { icon: <FontAwesome5 name="house-user" size={24} color="black" />, text: 'Single Family' },
            { icon: <MaterialIcons name="outdoor-grill" size={24} color="black" />, text: 'Our doors' },
        ],
    },
    {
        id: 'amenitiesRow2',
        type: 'AmenitiesItem',
        data: [
            { icon: <Fontisto name="room" size={24} color="black" />, text: 'Room Service' },
            { icon: <MaterialCommunityIcons name="table-furniture" size={24} color="black" />, text: 'Fully-furnished' },
        ],
    },
    {
        id: 'amenitiesRow3',
        type: 'AmenitiesItem',
        data: [
            { icon: <FontAwesome name="bathtub" size={24} color="black" />, text: 'Bathtub' },
            { icon: <MaterialIcons name="surround-sound" size={24} color="black" />, text: 'Quiet surroundings' },
        ],
    },
    { id: 'extraNight', type: 'extra', text: 'Stay for an average nightly rate of $109' },
    { id: 'button', type: 'button', text: 'Request to book' },
];

const FirstRoute = ({ imageUri, rating, hotelName, hotelStar }) => {
    const navigator = useNavigation();
    const renderItem = ({ item }) => {
        switch (item.type) {
            case 'title':
                return <Text style={[styles.box2, styles.h1]}>{item.text}</Text>;
            case 'text':
                return <Text style={[styles.box2, styles.txtcolor]}>{item.text}</Text>;
            case 'Amenities':
                return (
                    <Text style={[styles.box2, styles.h1]}>{item.text}</Text>
                );
            case 'AmenitiesItem':
                return (
                    <View style={styles.row}>
                        {item.data.map((amenity, index) => (
                            <View key={index} style={[styles.box, styles.row]}>
                                <View style={{ marginRight: 10 }}>
                                    {amenity.icon}
                                </View>
                                <Text style={styles.txtcolor}>
                                    {amenity.text}
                                </Text>
                            </View>
                        ))}
                    </View>
                );
            case 'button':
                return (
                    <TouchableOpacity onPress={() => {
                        navigator.navigate('Request to book', { imageUri: imageUri, rating: rating, hotelName: hotelName, hotelStar: hotelStar })
                    }}
                        style={[styles.button, styles.mg5]}
                    >
                        <Text style={styles.txtButton}>{item.text}</Text>
                    </TouchableOpacity>
                );
            case 'extra':
                return (
                    <Text style={[styles.box2, styles.boxextra, styles.txtcolor]}>
                        Stay <Text style={styles.txtextra}>1 extra night</Text> for an average nightly rate of $109
                    </Text>
                );
            default:
                return null;
        }
    };

    return (
        <FlatList
            data={flatListData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    dragArea: {
        height: 40,
        backgroundColor: '#ccc',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dragText: {
        fontSize: 16,
        color: '#555',
    },
    image: {
        width: '100%',
        height: '47%',
        position: 'absolute',
        top: 0
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    box: {
        flex: 1,
        margin: 5,
        padding: 3,
        paddingLeft: 15
    },
    box2: {
        margin: 2,
        padding: 5,
        paddingLeft: 15
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    mg5: {
        margin: 10
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        marginHorizontal: 70,
        overflow: 'hidden',
        padding: 12,
    },
    txtButton: {
        color: 'white', textAlign: 'center', fontWeight: 'bold'
    },
    boxextra: {
        padding: 20,
    },
    txtextra: {
        textDecorationLine: 'underline',
        color: 'black',
    },
    favorite: {
        position: 'absolute',
        top: 50,
        right: 40,
        zIndex: 10,
    },
    container2: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    avatarContainer: {
        marginRight: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ccc',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    rating: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 5,
    },
    feedback: {
        fontSize: 14,
        color: '#666',
    },
    input: {
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: '#fff',
        marginHorizontal: 30,
        height: 100
    },
    star: {
        flexDirection: 'row',
    },
    center: {
        alignItems: 'center',
    },
    txtcolor: {
        color: '#888',
    }
});

export default FirstRoute;
