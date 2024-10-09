import { View, Text } from '@ant-design/react-native';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from '@rneui/themed';
import RestaurantIcon from '../../assets/location-icon/restaurant.png';
import CheapIcon from '../../assets/location-icon/cheap.png';
import CafeIcon from '../../assets/location-icon/cafe.png';
import FerrisIcon from '../../assets/location-icon/ferris.png';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const LocationDetail = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <ImageBackground source={{ uri: 'https://ik.imagekit.io/tvlk/blog/2022/06/thap-tokyo-nhat-ban-2.jpg?tr=c-at_max?tr=c-at_max' }} resizeMode="cover" style={styles.bgImage}>
                <View style={styles.location}>
                    <View style={styles.startBtn}>
                        Start Planning
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, marginTop: 5 }}>
                        France On Your Mind?
                    </Text>
                    <Text style={{ marginTop: 5, color: 'gray', fontSize: 16 }}>
                        Bulid, organize, and map {'\n'}
                        out your best trip yet
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.categoriesContainer}>
                <Text style={styles.title}>
                    Categories
                </Text>
                <View style={{ width: '80%', flexDirection: 'row' }}>
                    <View style={styles.category}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={RestaurantIcon}
                                style={styles.iconSz}
                            ></Image>
                        </View>
                        <Text style={{ textAlign: 'center', fontWeight: 600, marginTop: 10 }}>
                            Restaurant
                        </Text>
                    </View>

                    <View style={styles.category}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={CheapIcon}
                                style={styles.iconSz}
                            ></Image>
                        </View>
                        <Text style={{ textAlign: 'center', fontWeight: 600, marginTop: 10 }}>
                            Cheap Eats
                        </Text>
                    </View>

                    <View style={styles.category}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={CafeIcon}
                                style={styles.iconSz}
                            ></Image>
                        </View>
                        <Text style={{ textAlign: 'center', fontWeight: 600, marginTop: 10 }}>
                            Cafes
                        </Text>
                    </View>

                    <View style={styles.category}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={FerrisIcon}
                                style={styles.iconSz}
                            ></Image>
                        </View>
                        <Text style={{ textAlign: 'center', fontWeight: 600, marginTop: 10 }}>
                            Attractions
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.categoriesContainer}>
                <Text style={styles.title}>
                    Top Places
                </Text>

                <View flexDirection="row">
                    <TouchableOpacity style={styles.place} onPress={() => { navigation.navigate('PlaceDetail') }} >

                        <Image
                            style={styles.placeImage}
                            source={{ uri: 'https://i.pinimg.com/564x/a4/b1/f2/a4b1f26f7673507415435ef9050ea082.jpg' }}
                        />
                        <View>
                            <View style={styles.comment}>
                                <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 7 }}>
                                    Malaga River
                                </Text>
                                <Text style={{ fontSize: 16, color: 'gray' }}>
                                    <EvilIcons name="location" size={18} color="black" />
                                    France {'  '}
                                    <AntDesign name="star" size={18} color="#F4B537" style={{ fontSize: 15, fontWeight: 'bold' }} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>4.9</Text>
                                </Text>
                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.place} onPress={() => { navigation.navigate('PlaceDetail') }} >
                        <Image
                            style={styles.placeImage}
                            source={{ uri: 'https://i.pinimg.com/564x/4a/b4/1f/4ab41f57954d4def38475350cab8b63e.jpg' }}
                        />
                        <View>
                            <View style={styles.comment}>
                                <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 7 }}>
                                    Monmatre
                                </Text>
                                <Text style={{ fontSize: 16, color: 'gray' }}>
                                    <EvilIcons name="location" size={18} color="black" />
                                    France {'  '}
                                    <AntDesign name="star" size={18} color="#F4B537" style={{ fontSize: 15, fontWeight: 'bold' }} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>4.9</Text>
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.categoriesContainer}>
                <Text style={styles.title}>
                    Travel Guides
                </Text>
                <View>
                    <Image
                        style={styles.guideImage}
                        source={{ uri: 'https://i.pinimg.com/564x/4e/44/98/4e4498e5f4ef948a67d8a78e88e08f31.jpg' }}
                    />
                    <View style={styles.recommend}>
                        <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar
                                size={42}
                                rounded
                                source={{ uri: "https://randomuser.me/api/portraits/men/7.jpg" }}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 17, fontWeight: 700 }}>Alan Watt</Text>
                            <Text style={{ color: 'gray' }}>
                                <Entypo name="dot-single" size={18} color="black" />
                                5,3K views
                            </Text>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5 }}>
                            If you only have a day
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.categoriesContainer}>
                <Text style={styles.title}>
                    Travel Information
                </Text>

                <View style={styles.info}>
                    <View style={styles.infoItem}>
                        <MaterialCommunityIcons name="table-heart" size={36} color="black" />
                        <Text style={{ fontSize: 18, fontWeight: 600 }}>Intro</Text>
                    </View>
                    <View style={styles.hr}></View>
                    <View style={styles.infoItem}>
                        <MaterialCommunityIcons name="train-car" size={37} color="black" />
                        <Text style={{ fontSize: 18, fontWeight: 600 }}>Get around</Text>
                    </View>
                    <View style={styles.hr}></View>
                    <View style={styles.infoItem}>
                        <MaterialCommunityIcons name="map-search-outline" size={36} color="black" />
                        <Text style={{ fontSize: 18, fontWeight: 600 }}>Understand</Text>
                    </View>
                </View>
            </View>
        </ScrollView >

    );
};

const styles = StyleSheet.create({
    bgImage: {
        height: 300
    },
    location: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        backgroundColor: 'white',
        width: 300,
        height: 170,
        borderRadius: 20,
        padding: 20
    },
    startBtn: {
        backgroundColor: 'black',
        width: 150,
        height: 50,
        borderRadius: 15,
        color: 'white',
        textAlign: 'center',
        lineHeight: 45,
        fontSize: 18,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        marginHorizontal: 5,
        marginVertical: 20,
        fontWeight: 'bold'
    },
    categoriesContainer: {
        width: '100%',
        paddingHorizontal: 10
    },
    category: {
        width: '25%',
        marginHorizontal: 10
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    iconSz: {
        width: '70%',
        height: '70%',
    },
    place: {
        height: 300,
        width: '50%',
        paddingHorizontal: 8
    },
    placeImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    comment: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'white',
        height: 90,
        left: 15,
        right: 15,
        borderRadius: 20,
        padding: 14,
    },
    guideImage: {
        marginLeft: '2.5%',
        height: 250,
        width: '95%',
        borderRadius: 20
    },
    recommend: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        backgroundColor: 'white',
        width: '55%',
        padding: 10,
        paddingBottom: 20,
        borderRadius: 15,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        marginLeft: '5%',
        marginBottom: '5%',
        width: '90%',
        borderRadius: 25,
        backgroundColor: 'white'
    },
    infoItem: {
        width: '33%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hr: {
        width: 2,
        height: '55%',
        backgroundColor: '#EFEEEE',

    }
})

export default LocationDetail;