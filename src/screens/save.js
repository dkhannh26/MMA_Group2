import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
                    <View style={[styles.cardItem]} >
                        <View style={{ height: '60%' }}>
                            <View style={styles.likeBtnContainer}>
                                <LikeButton></LikeButton>
                            </View>
                            <View style={styles.star}>
                                <Text style={{ color: 'white', fontWeight: 700, fontSize: 20 }}>
                                    <AntDesign name="star" size={20} color="#F4B537" style={{ fontWeight: 'bold' }} />
                                    4.9
                                </Text>
                            </View>
                            <Image
                                style={styles.cardImage}
                                source={{ uri: 'https://ik.imagekit.io/tvlk/blog/2022/06/thap-tokyo-nhat-ban-2.jpg?tr=c-at_max?tr=c-at_max' }}
                            />
                        </View>

                        <View style={styles.cardScript}>
                            <View style={{ justifyContent: 'center', alignItems: "center", flexDirection: "row", position: 'absolute', top: 15, right: 20 }}>
                                <EvilIcons name="location" size={18} color="black" />
                                <Text style={{ color: 'gray' }}>
                                    France
                                </Text>
                            </View>
                            <View style={{ width: '60%' }}>
                                <Text style={{ fontSize: 28, fontWeight: 600, marginVertical: 1 }}>Paris</Text>
                                <Text style={{ color: '#64646E', fontSize: 18 }}>Casual Paris with palm frond covered roof...</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.cardItem]} >
                        <View style={{ height: '60%' }}>
                            <View style={styles.likeBtnContainer}>
                                <LikeButton></LikeButton>
                            </View>
                            <View style={styles.star}>
                                <Text style={{ color: 'white', fontWeight: 700, fontSize: 20 }}>
                                    <AntDesign name="star" size={20} color="#F4B537" style={{ fontWeight: 'bold' }} />
                                    4.9
                                </Text>
                            </View>
                            <Image
                                style={styles.cardImage}
                                source={{ uri: 'https://ik.imagekit.io/tvlk/blog/2022/06/thap-tokyo-nhat-ban-2.jpg?tr=c-at_max?tr=c-at_max' }}
                            />
                        </View>

                        <View style={styles.cardScript}>
                            <View style={{ justifyContent: 'center', alignItems: "center", flexDirection: "row", position: 'absolute', top: 15, right: 20 }}>
                                <EvilIcons name="location" size={18} color="black" />
                                <Text style={{ color: 'gray' }}>
                                    France
                                </Text>
                            </View>
                            <View style={{ width: '60%' }}>
                                <Text style={{ fontSize: 28, fontWeight: 600, marginVertical: 1 }}>Paris</Text>
                                <Text style={{ color: '#64646E', fontSize: 18 }}>Casual Paris with palm frond covered roof...</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.cardItem]} >
                        <View style={{ height: '60%' }}>
                            <View style={styles.likeBtnContainer}>
                                <LikeButton></LikeButton>
                            </View>
                            <View style={styles.star}>
                                <Text style={{ color: 'white', fontWeight: 700, fontSize: 20 }}>
                                    <AntDesign name="star" size={20} color="#F4B537" style={{ fontWeight: 'bold' }} />
                                    4.9
                                </Text>
                            </View>
                            <Image
                                style={styles.cardImage}
                                source={{ uri: 'https://ik.imagekit.io/tvlk/blog/2022/06/thap-tokyo-nhat-ban-2.jpg?tr=c-at_max?tr=c-at_max' }}
                            />
                        </View>

                        <View style={styles.cardScript}>
                            <View style={{ justifyContent: 'center', alignItems: "center", flexDirection: "row", position: 'absolute', top: 15, right: 20 }}>
                                <EvilIcons name="location" size={18} color="black" />
                                <Text style={{ color: 'gray' }}>
                                    France
                                </Text>
                            </View>
                            <View style={{ width: '60%' }}>
                                <Text style={{ fontSize: 28, fontWeight: 600, marginVertical: 1 }}>Paris</Text>
                                <Text style={{ color: '#64646E', fontSize: 18 }}>Casual Paris with palm frond covered roof...</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.cardItem]} >
                        <View style={{ height: '60%' }}>
                            <View style={styles.likeBtnContainer}>
                                <LikeButton></LikeButton>
                            </View>
                            <View style={styles.star}>
                                <Text style={{ color: 'white', fontWeight: 700, fontSize: 20 }}>
                                    <AntDesign name="star" size={20} color="#F4B537" style={{ fontWeight: 'bold' }} />
                                    4.9
                                </Text>
                            </View>
                            <Image
                                style={styles.cardImage}
                                source={{ uri: 'https://ik.imagekit.io/tvlk/blog/2022/06/thap-tokyo-nhat-ban-2.jpg?tr=c-at_max?tr=c-at_max' }}
                            />
                        </View>

                        <View style={styles.cardScript}>
                            <View style={{ justifyContent: 'center', alignItems: "center", flexDirection: "row", position: 'absolute', top: 15, right: 20 }}>
                                <EvilIcons name="location" size={18} color="black" />
                                <Text style={{ color: 'gray' }}>
                                    France
                                </Text>
                            </View>
                            <View style={{ width: '60%' }}>
                                <Text style={{ fontSize: 28, fontWeight: 600, marginVertical: 1 }}>Paris</Text>
                                <Text style={{ color: '#64646E', fontSize: 18 }}>Casual Paris with palm frond covered roof...</Text>
                            </View>
                        </View>
                    </View>
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