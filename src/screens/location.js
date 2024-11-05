import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from "react-native-maps";

const StyledMarker = () => (
    <ImageBackground
        source={{ uri: 'https://randomuser.me/api/portraits/men/8.jpg' }}
        style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}>Dotai</Text>
    </ImageBackground>
);

const MyMap = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009,
            });
        })();
    }, []);

    if (!location) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <View style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                provider={MapView.PROVIDER_GOOGLE}
                mapType='none'
                region={location}
            >
                <Marker coordinate={location}>
                    <StyledMarker />
                </Marker>
            </MapView>
        </View>
    );
}

const HotelMap = ({ latitude, longitude }) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        setLocation({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
        });
    }, [latitude, longitude]);


    if (!location) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <View style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                provider={MapView.PROVIDER_GOOGLE}
                mapType='none'
                region={location}
            >
                <Marker coordinate={location}>
                    <StyledMarker />
                </Marker>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { MyMap, HotelMap };