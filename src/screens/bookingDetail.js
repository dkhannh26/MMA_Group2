import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Image, PanResponder, StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import FirstRoute from '../components/FirstRoute';
import SecondRoute from '../components/SecondRoute';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { color } from '@rneui/base';


const DraggableForm = () => {
    const route = useRoute();
    const { imageUri, price, hotelName, rating, stars, hotelType } = route.params;
    const renderScene = SceneMap({
        first: () => <FirstRoute imageUri={imageUri} />,
        second: SecondRoute,
    });

    const screenHeight = Dimensions.get('window').height;
    const smallHeight = screenHeight * 0.5;
    const largeHeight = screenHeight * 0.8;

    const animatedHeight = useRef(new Animated.Value(smallHeight)).current;
    const [isExpanded, setIsExpanded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => Math.abs(gestureState.dy) > 50,
            onPanResponderMove: (evt, gestureState) => {
                const newHeight = smallHeight - gestureState.dy;
                if (newHeight > smallHeight && newHeight < largeHeight) {
                    animatedHeight.setValue(newHeight);
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dy < -30) {
                    Animated.spring(animatedHeight, {
                        toValue: largeHeight,
                        useNativeDriver: false,
                    }).start();
                    setIsExpanded(true);
                } else if (gestureState.dy > 30) {
                    Animated.spring(animatedHeight, {
                        toValue: smallHeight,
                        useNativeDriver: false,
                    }).start();
                    setIsExpanded(false);
                }
            },
        })
    ).current;

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Overview' },
        { key: 'second', title: 'Review' },
    ]);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <GestureHandlerRootView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.favorite} onPress={toggleFavorite}>
                    {isFavorite ? (
                        <AntDesign name="heart" size={30} color="red" />
                    ) : (
                        <AntDesign name="hearto" size={30} color="black" />
                    )}
                </TouchableOpacity>
                <View style={styles.mainContent}>
                    <Image
                        style={styles.image}
                        source={{ uri: imageUri }}
                    />
                </View>

                <Animated.View
                    style={[styles.formContainer, { height: animatedHeight }]}
                    {...panResponder.panHandlers}
                >
                    <Text style={[styles.h1, styles.mg5, styles.box2]}>Star Pacific Sylhet</Text>
                    <View style={{ alignItems: 'center', flexDirection: 'row', paddingLeft: 15 }}>
                        <EvilIcons name="location" size={24} color="black" />
                        <Text style={[styles.mg5, styles.txtcolor]}>
                            Bangladesh
                        </Text>
                    </View>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                        renderTabBar={props => (
                            <TabBar
                                {...props}
                                style={{ backgroundColor: 'white' }}
                                indicatorStyle={{ backgroundColor: '#FF361D', marginLeft: '16%', width: '19%' }}
                                inactiveColor="#888"
                                labelStyle={{ color: '#FF361D' }}
                            />
                        )}
                    />
                </Animated.View>
            </View>
        </GestureHandlerRootView>
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
    favorite: {
        position: 'absolute',
        top: 50,
        right: 40,
        zIndex: 100,

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
        backgroundColor: "gray",
    },
    txtextra: {
        textDecorationLine: 'underline',
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

export default DraggableForm;
