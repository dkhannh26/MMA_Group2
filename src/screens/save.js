import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    return (
        <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
            <MaterialCommunityIcons
                name={liked ? "heart" : "heart-outline"}
                size={22}
                color={liked ? "red" : "black"}
            />
        </Pressable>
    );
};


const Save = () => {
    const navigator = useNavigation();
    const [likedCities, setLikedCities] = useState([])

    useEffect(() => {
        const fecth = async () => {
            const storedCities = await AsyncStorage.getItem("favCities");
            const cities = JSON.parse(storedCities)
            const likedCities = cities.filter(item => item.like === true)
            setLikedCities(likedCities)
        }
        fecth()
    }, [likedCities, navigator])
    return (
        <View style={{ backgroundColor: '#F7F6F0', flex: 1 }}>
            <ScrollView >
                <View style={styles.headerDetail}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 30 }}>
                        <TouchableOpacity
                            onPress={() => navigator.goBack()}
                        >
                            <View style={styles.backBtn}>
                                <AntDesign name="left" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.saveTitle}>
                            <Text style={{ fontSize: 20, fontWeight: 600 }}>Saved</Text>
                        </View>
                    </View>
                </View>

                {/* location list */}
                <View style={styles.cardList}>
                    {
                        likedCities.map(item => {
                            return (
                                <View key={item.name} style={[styles.cardItem]} >
                                    <View style={{ height: '60%' }}>
                                        {/* <View style={styles.likeBtnContainer}>
                                            <LikeButton></LikeButton>
                                        </View> */}
                                        <View style={styles.star}>
                                            <Text style={{ color: 'white', fontWeight: 700, fontSize: 20 }}>
                                                <AntDesign name="star" size={20} color="#F4B537" style={{ fontWeight: 'bold' }} />
                                                4.9
                                            </Text>
                                        </View>
                                        <Image
                                            style={styles.cardImage}
                                            source={{ uri: item.image }}
                                        />
                                    </View>

                                    <View style={styles.cardScript}>
                                        <View style={{ justifyContent: 'center', alignItems: "center", flexDirection: "row", position: 'absolute', top: 15, right: 20 }}>
                                            <EvilIcons name="location" size={18} color="black" />
                                            <Text style={{ color: 'gray' }}>
                                                {item.country}
                                            </Text>
                                        </View>
                                        <View style={{ width: '60%' }}>
                                            <Text style={{ fontSize: 28, fontWeight: 600, marginVertical: 1 }}>{item.name}</Text>
                                            <Text style={{ color: '#64646E', fontSize: 18 }}>Casual with palm frond covered roof...</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                    {
                        likedCities.length === 0 ? <Text style={{ textAlign: 'center' }}>No data</Text> : ""
                    }
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    headerDetail: {
        marginVertical: 20,
        marginTop: 40,
        flexDirection: 'row',
        height: 50
    },
    backBtn: {
        backgroundColor: '#EBEAE5',
        borderRadius: 30,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    saveTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: '50%',
        right: '50%',
        height: '100%',
    },
    cardList: {
        paddingHorizontal: '7%'
    },
    cardItem: {
        backgroundColor: 'white',
        width: '100%',
        height: 290,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 5,
    },
    cardImage: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: '94%'
    },
    cardScript: {
        height: '40%',
        paddingHorizontal: 15,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomEndRadius: 10
    },
    likeBtnContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'white',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    star: {
        position: "absolute",
        bottom: 25,
        left: 15,
        zIndex: 1,

    },
})

export default Save;