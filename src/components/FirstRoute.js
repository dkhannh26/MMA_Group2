import { FontAwesome, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../assets/css/styles.js';
import { useNavigation } from '@react-navigation/native';

const flatListData = [
    { id: 'descriptionTitle', type: 'title', text: 'Description' },
    {
        id: 'descriptionContent',
        type: 'text',
        text: 'Museum focusing on local indigenous people & culture, with all tools, clothing & artifacts on display. Don bosco to museum',
    },
    {
        id: 'amenitiesRow1',
        type: 'row',
        data: [
            { icon: <FontAwesome5 name="house-user" size={24} color="black" />, text: 'Single Family' },
            { icon: <MaterialIcons name="outdoor-grill" size={24} color="black" />, text: 'Our doors' },
        ],
    },
    {
        id: 'amenitiesRow2',
        type: 'row',
        data: [
            { icon: <Fontisto name="room" size={24} color="black" />, text: 'Room Service' },
            { icon: <MaterialCommunityIcons name="table-furniture" size={24} color="black" />, text: 'Fully-furnished' },
        ],
    },
    {
        id: 'amenitiesRow3',
        type: 'row',
        data: [
            { icon: <FontAwesome name="bathtub" size={24} color="black" />, text: 'Bathtub' },
            { icon: <MaterialIcons name="surround-sound" size={24} color="black" />, text: 'Quiet surroundings' },
        ],
    },
    { id: 'extraNight', type: 'extra', text: 'Stay 1 extra night for an average nightly rate of $109' },
    { id: 'button', type: 'button', text: 'Request to book' },
];

const FirstRoute = ({ imageUri }) => {
    const navigator = useNavigation();
    const renderItem = ({ item }) => {
        switch (item.type) {
            case 'title':
                return <Text style={[styles.box2, styles.h1]}>{item.text}</Text>;
            case 'text':
                return <Text style={styles.box2}>{item.text}</Text>;
            case 'row':
                return (
                    <View style={styles.row}>
                        {item.data.map((amenity, index) => (
                            <Text key={index} style={styles.box}>
                                {amenity.icon} {amenity.text}
                            </Text>
                        ))}
                    </View>
                );
            case 'button':
                return (
                    <TouchableOpacity onPress={() => {
                        navigator.navigate('Request to book', { imageUri: imageUri })
                    }}
                        style={[styles.button, styles.mg5]}
                    >
                        <Text style={styles.txtButton}>{item.text}</Text>
                    </TouchableOpacity>
                );
            case 'extra':
                return (
                    <Text style={[styles.box2, styles.boxextra]}>{item.text}</Text>
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

export default FirstRoute;
