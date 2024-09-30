import React from 'react';
import { View, StyleSheet, SectionList, Text, TouchableOpacity } from 'react-native';

export default function Help() {

    const helpData = [
        {
            title: "Trip App for Co-parents.",
            data: []
        },
        {
            title: "Account Information",
            data: [
                {
                    text: "How do I set up my Trip App?"
                },
                {
                    text: "How do I password protect my account?"
                },
                {
                    text: "How do I set up my Trip App?"
                },
            ]
        },
        {
            title: "Connecting Co-parent & Creating a circle",
            data: [
                {
                    text: "If I'm a third party, how do I connect?"
                },
                {
                    text: "How do I delete or disconnect from a member?"
                },
                {
                    text: "How do I create my account?"
                },
                {
                    text: "How do I verify my account?"
                },
            ]
        },
    ]

    return (
        <View style={styles.container}>
            <SectionList
                sections={helpData}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    >
                        <View>
                            <Text style={[styles.helpText, styles.helpItem]}>{item.text}</Text>
                        </View>
                    </TouchableOpacity>
                )
                }
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={[styles.title, styles.helpItem]}>{title}</Text>
                )
                }
                style={styles.sectionList}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    sectionList: {
        paddingHorizontal: 15,
    },
    helpItem: {
        padding: 10,
        borderRadius: 50,
    },
    title: {
        fontWeight: "600",
        marginVertical: 5,
        backgroundColor: "#F0F1F2",
    },
    helpText: {
        borderColor: "#F0F1F2",
        borderWidth: 1,
        marginBottom: 5,
        color: "#64646E"
    }
});
