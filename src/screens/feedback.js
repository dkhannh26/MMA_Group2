import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function Feedback() {
    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <View style={[styles.messageBubble, styles.userMessage]}>
                    <Text style={[styles.messageText, {color: "white"}]}>Hello, I need support</Text>
                    {/* <Image source={{ uri: 'https://example.com/child-image.jpg' }} style={styles.image} /> */}
                </View>
                {/* {/* <View style={styles.messageBubble}>
                    <Text style={styles.messageText}>Hi, That's great! Thanks for letting me know 😊</Text>
                    <Text style={styles.timestamp}>14:06</Text>
                </View> */}
                <View style={[styles.messageBubble, styles.adminMessage]}>
                    <Text style={styles.messageText}>Hi, how can i help you 😘</Text>
                    {/* <Text style={styles.timestamp}>14:06</Text> */}
                </View> 
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Write a reply..." />
                <TouchableOpacity>
                    <Text style={styles.emoji}>😊</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    messageContainer: {
        flex: 1,
        padding: 10,
    },
    messageBubble: {
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        maxWidth: "70%",
    },
    messageText: {
        fontSize: 16,
    },
    userMessage: {
        marginRight: 5,
        marginLeft: "auto",
        backgroundColor: "black"
    },
    adminMessage: {
        marginRight: "auto",
        marginLeft: 5
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
        textAlign: 'right',
        marginTop: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        fontSize: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
    },
    emoji: {
        fontSize: 24,
        marginLeft: 10,
    },
});


