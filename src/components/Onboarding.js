import React, { useState, useRef } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet, StatusBar, FlatList, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const onboardingData = [
    {
        key: '1',
        title: 'Add & Manage Cards',
        description: 'Manage your all earnings, expenses & every penny anywhere, anytime.',
        image: require('../../assets/image/on1.jpg'),
    },
    {
        key: '2',
        title: 'Explore the Outdoors',
        description: 'Discover new places and adventures with our app.',
        image: require('../../assets/image/on2.jpg'),
    },
    {
        key: '3',
        title: 'Pay Bills & Payments',
        description: 'Manage your all earnings, expenses & every penny anywhere, anytime.',
        image: require('../../assets/image/on3.jpg'),
    },
];

const Onboarding = () => {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleNext = () => {
        if (currentIndex < onboardingData.length - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigation.navigate('Login');
        }
    };

    const handleViewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
            <FlatList
                data={onboardingData}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment='center'
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </ImageBackground>
                    </View>
                )}
                onViewableItemsChanged={handleViewableItemsChanged}
                ref={flatListRef}
            />
            <View style={styles.dotsContainer}>
                {onboardingData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor: index === currentIndex ? '#000' : '#ccc' },
                        ]}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>{currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 500,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
    },
    dotsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 250,
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        bottom: -100
    },
    nextButton: {
        backgroundColor: 'black',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        position: 'absolute',
        bottom: 50,
        marginHorizontal: 50,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Onboarding;
