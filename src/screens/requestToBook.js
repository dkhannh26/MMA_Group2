import React, { useState } from 'react';
import { Image, Text, View, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import PaymentModal from '../components/ModalPayment';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const RequestToBook = () => {
    const route = useRoute();
    const { imageUri, rating, hotelName, hotelStar } = route.params;
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const renderStars = (rating) => {
        const filledStars = Math.floor(rating);
        const totalStars = 5;

        return (
            <View style={styles.starsContainer}>
                {[...Array(totalStars)].map((_, index) => (
                    <AntDesign
                        key={index}
                        name={index < filledStars ? "star" : "staro"}
                        size={16}
                        color={index < filledStars ? "gold" : "gray"}
                    />
                ))}
            </View>
        );
    };
    return (
        <ScrollView>
            <View style={styles.container2}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: imageUri }}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.rating}>{hotelName}</Text>
                    <Text style={styles.name}>{hotelStar}</Text>
                    <Text style={styles.feedback}>{renderStars(rating)}</Text>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.infoContainer}>
                    <Text style={[styles.h1, styles.mg5]}>Your trip</Text>
                    <Text style={[styles.h2, styles.mg5]}>Dates</Text>
                    <Text style={[styles.mg5, styles.txtcolor]}>Sun,16 Aug to Wed, 19 Aug</Text>
                    <Text style={[styles.h2, styles.mg5]}>Guests</Text>
                    <Text style={[styles.mg5, styles.txtcolor]}>2 guest</Text>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.infoContainer}>
                    <Text style={[styles.h1, styles.mg5]}>Price details</Text>
                    <View style={styles.star}>
                        <Text style={[styles.mg5, styles.txtcolor]}>$160 x 2 nights <EvilIcons name="question" size={24} color="black" /></Text>
                        <Text style={styles.price}>$320</Text>
                    </View>
                    <View style={styles.star}>
                        <Text style={[styles.mg5, styles.txtcolor]}>Cleaning fee <EvilIcons name="question" size={24} color="black" /></Text>
                        <Text style={styles.price}>$40</Text>
                    </View>
                    <View style={styles.star}>
                        <Text style={[styles.mg5, styles.txtcolor]}>Service fee <EvilIcons name="question" size={24} color="black" /></Text>
                        <Text style={styles.price}>$10</Text>
                    </View>
                    <View style={styles.star}>
                        <Text style={[styles.mg5, styles.txtcolor]}>Occupacy taxes & fees <EvilIcons name="question" size={24} color="black" /></Text>
                        <Text style={styles.price}>$25</Text>
                    </View>
                    <View style={styles.star}>
                        <Text style={[styles.h2, styles.mg5]}>Total(USD)</Text>
                        <Text style={[styles.price, styles.h2]}>$450</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={[styles.button, styles.mg5]}
                onPress={toggleModal}
            >
                <Text style={styles.txtButton}>Payment</Text>
            </TouchableOpacity>
            <PaymentModal isVisible={isModalVisible} onClose={toggleModal} />
        </ScrollView>
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
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    box: {
        flex: 1,
        margin: 5,
        padding: 10,
    },
    box2: {
        margin: 2,
        padding: 5,
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
        color: 'white', textAlign: 'center',
    },
    boxextra: {
        padding: 20,
        backgroundColor: "gray",
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
    price: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    txtcolor: {
        color: '#888'
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default RequestToBook;