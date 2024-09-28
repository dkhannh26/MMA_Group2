import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Image, PanResponder, Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import FirstRoute from '../components/FirstRoute';
import SecondRoute from '../components/SecondRoute';

import styles from '../../assets/css/styles.js';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';


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
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <EvilIcons name="location" size={24} color="black" />
                        <Text style={styles.mg5}>
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
                                style={{ backgroundColor: 'white' }} // Chỉnh màu nền của TabBar
                                indicatorStyle={{ backgroundColor: '#FF361D' }} // Chỉnh màu của indicator (thanh gạch chân tab đang chọn)
                                inactiveColor="black" // Màu đen khi tab không được chọn
                                labelStyle={{ color: '#FF361D' }} // Chỉnh màu chữ của tab
                            />
                        )}
                    />
                </Animated.View>
            </View>
        </GestureHandlerRootView>
    );
};

export default DraggableForm;
