import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Edit() {
    return (
        <View style={styles.container}>
            <Text>Edit page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});