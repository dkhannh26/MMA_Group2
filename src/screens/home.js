import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, ScrollView, TouchableOpacity, SectionList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Avatar } from '@rneui/themed';
import Carousel from '../components/carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Entypo from '@expo/vector-icons/Entypo';
import { Image } from '@rneui/base';
import { Input, List } from '@ant-design/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cities } from '../data';

const Home = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        AsyncStorage.setItem('favCities', JSON.stringify(cities))
        _retrieveData()
    }, [])


    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('loginName');
            if (value !== null) {
                setUser(JSON.parse(value))
            }
        } catch (error) {
            console.error(error)
        }
    };

    const slider = [
        {
            id: 1,
            url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/a8/2c/caption.jpg?w=1400&h=1400&s=1'
        },
        {
            id: 2,
            url: 'https://asiaholiday.com.vn/pic/Tour/Tour%20Du%20lich%20Ha%20Long%20(5)_2261_HasThumb.jpg'
        },
        {
            id: 3,
            url: 'https://www.vietmytravel.com/wp-content/uploads/2019/04/h%E1%BB%93-ho%C3%A0n-ki%E1%BA%BFm_vietmytravel_du-l%E1%BB%8Bch-h%C3%A0-n%E1%BB%99i-e1554716923715.jpg'
        },
        {
            id: 4,
            url: 'https://asiaholiday.com.vn/pic/Tour/Tour%20Du%20lich%20Ha%20Long%20(5)_2261_HasThumb.jpg'
        }
    ]


    const [filter, setFilter] = useState('popular')
    return (
        <View style={styles.bg}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
                        <Avatar
                            size={42}
                            rounded
                            source={{ uri: "https://randomuser.me/api/portraits/men/7.jpg" }}
                        />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={[styles.headerText, { fontSize: 20 }]}>
                                Hi {user}
                            </Text>
                            <Text style={[styles.headerText, { fontWeight: 'bold' }]}>
                                Good afternoon
                            </Text>
                        </View>
                    </View>
                    <View style={styles.headerIcon}>
                        <Ionicons name="notifications-outline" size={20} color="black" />
                    </View>
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <List.Item style={{ borderRadius: 30 }} >
                        <Input
                            style={{ borderRadius: 100 }}
                            prefix=<Feather name="search" size={24} color="black" />
                            suffix=<Fontisto name="nav-icon-list-a" size={17} color="black" />
                            placeholder="Discover a city"
                        />
                    </List.Item>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <View style={[styles.filterItem, filter === 'popular' ? styles.selected : '']} >
                        <TouchableOpacity onPress={() => setFilter('popular')}>
                            <Text style={[{ color: '#808080', fontSize: 16 }, filter === 'popular' ? styles.textSelected : '']}>
                                Popular
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.filterItem, filter === 'most' ? styles.selected : '']}>
                        <TouchableOpacity onPress={() => setFilter('most')}>
                            <Text style={[{ color: '#808080', fontSize: 16 }, filter === 'most' ? styles.textSelected : '']}>
                                Most Viewed
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.filterItem, filter === 'recommend' ? styles.selected : '']}>
                        <TouchableOpacity onPress={() => setFilter('recommend')}>
                            <Text style={[{ color: '#808080', fontSize: 16 }, filter === 'recommend' ? styles.textSelected : '']}>
                                Recommend
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.carousel}>
                    <GestureHandlerRootView>
                        <Carousel />
                    </GestureHandlerRootView>
                </View>


                <View style={styles.feature}>
                    <Text style={styles.titleText}>Featured Guild Users</Text>
                    <View style={styles.slider}>
                        <FlatList
                            data={slider}
                            removeClippedSubviews={false}
                            horizontal={true}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.sliderItem}>
                                        <Image
                                            style={styles.sliderImage}
                                            source={{ uri: item.url }}
                                        >
                                            <View style={styles.comment}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 7 }}>
                                                    Malaga, Spain
                                                </Text>
                                                <Text style={{ fontSize: 14, color: 'gray', marginBottom: 4 }}>
                                                    Our a visit to Malaga was part of a cruise of the Western Med...
                                                </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                                    <Avatar
                                                        size={42}
                                                        rounded
                                                        source={{ uri: "https://randomuser.me/api/portraits/men/8.jpg" }}
                                                    />
                                                    <Text style={{ marginLeft: 5, fontSize: 17, fontWeight: 700 }}>Alan Watt</Text>
                                                    <Text style={{ color: 'gray' }}>
                                                        <Entypo name="dot-single" size={18} color="black" />
                                                        5,3K views
                                                    </Text>
                                                </View>
                                            </View>
                                        </Image>
                                    </View>
                                )
                            }}
                        >
                        </FlatList>
                    </View>
                </View>

                <View style={styles.popular} >
                    <Text style={styles.titleText}>Popular Destinations</Text>
                    <ScrollView horizontal={true} style={styles.addresses}>
                        <View style={styles.address}>
                            <Avatar
                                containerStyle={{
                                    borderColor: 'white',
                                    borderStyle: 'solid',
                                    borderWidth: 3,
                                }}
                                marginVertical={5}
                                size={90}
                                rounded
                                source={{ uri: "https://ik.imagekit.io/tvlk/blog/2022/06/thap-tokyo-nhat-ban-2.jpg?tr=c-at_max?tr=c-at_max" }}
                            />
                            <Text>
                                Tokyo
                            </Text>
                        </View>
                        <View style={styles.address}>
                            <Avatar
                                containerStyle={{
                                    borderColor: 'white',
                                    borderStyle: 'solid',
                                    borderWidth: 3,
                                }}
                                marginVertical={5}
                                size={90}
                                rounded
                                source={{ uri: "https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg" }}
                            />
                            <Text>
                                Paris
                            </Text>
                        </View>
                        <View style={styles.address}>
                            <Avatar
                                containerStyle={{
                                    borderColor: 'white',
                                    borderStyle: 'solid',
                                    borderWidth: 3,
                                }}
                                marginVertical={5}
                                size={90}
                                rounded
                                source={{ uri: "https://vcdn1-dulich.vnecdn.net/2022/05/11/hoan-kiem-lake-7673-1613972680-1508-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=2wB1cBTUcNKuk68nrG6LMQ" }}
                            />
                            <Text>
                                Ha Noi
                            </Text>
                        </View>
                        <View style={styles.address}>
                            <Avatar
                                containerStyle={{
                                    borderColor: 'white',
                                    borderStyle: 'solid',
                                    borderWidth: 3,
                                }}
                                marginVertical={5}
                                size={90}
                                rounded
                                source={{ uri: "https://asiaholiday.com.vn/pic/Tour/Tour%20Du%20lich%20Ha%20Long%20(5)_2261_HasThumb.jpg" }}
                            />
                            <Text>
                                Ha Long Bay
                            </Text>
                        </View>

                    </ScrollView>
                </View>
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
        backgroundColor: '#F7F6F0'
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
        left: 15,
        right: 15,
        borderRadius: 20,
        padding: 14,

    }

})

export default Home;