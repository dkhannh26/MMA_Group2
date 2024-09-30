import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Feedback() {
    return (
        <View style={styles.container}>
            <Text>feedback page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});