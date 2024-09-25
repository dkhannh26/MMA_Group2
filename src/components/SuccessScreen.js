import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Image
                source={require('../../assets/image/done.jpg')}
                style={styles.icon}
            />
            <Text style={styles.headerText}>Done</Text>
            <Text style={styles.successText}>You have successfully completed your registration</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log in</Text>
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
        padding: 25,
    },
    iconContainer: {
        marginBottom: 20,
    },
    icon: {
        height: 80,
        width: 80,
        marginBottom:20
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    successText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 200,
        marginHorizontal: 30,
        textAlign: 'center'
    },
    loginButton: {
        backgroundColor: 'black',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default SuccessScreen;
