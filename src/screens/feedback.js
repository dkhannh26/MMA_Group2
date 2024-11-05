import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, TextInput, FlatList, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function Feedback() {

    const [message, setMessage] = useState("");
    const [inbox, setInbox] = useState([]);

    const handleAddMessage = () => {
        setInbox([...inbox, { id: inbox.length + 1, mess: message }]);
        setMessage("")
    }

    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <View style={[styles.messageBubble, styles.adminMessage]}>
                    <Text style={styles.messageText}>Hi, how can i help you 😘 </Text>
                </View>
                <FlatList
                    data={inbox}
                    renderItem={({ item }) => {
                        return (
                            <View style={[styles.messageBubble, styles.userMessage]}>
                                <Text style={[styles.messageText, { color: "white" }]}>{item.mess}</Text>
                            </View>
                        )
                    }}
                    style={{ flexGrow: 0 }}
                />
            </View>
            <View style={[styles.inputContainer]}>
                <Feather name="plus-circle" size={26} color="black" />
                <View style={styles.input}>
                    <TextInput
                        placeholder="Write a reply..." placeholderTextColor={'#64646E'}
                        onChangeText={(value) => setMessage(value)}
                        value={message}
                        style={{ flex: 1 }}
                    />
                    <TouchableOpacity
                        onPress={handleAddMessage}
                    >
                        <Feather name="send" size={24} color="black" />
                    </TouchableOpacity>
                </View>
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 15,
        paddingBottom: 50,
        borderTopWidth: 1,
        borderTopColor: "#F6F5F5"
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        padding: 10,
        backgroundColor: "#F6F5F5",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
});


