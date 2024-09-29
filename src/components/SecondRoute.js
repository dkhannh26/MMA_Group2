import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { Alert, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const SecondRoute = ({ imageUri }) => {
    const [id, setId] = useState(2);
    const [name, setName] = useState('');
    const [star, setStar] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [listFeedback, setListFeedback] = useState([
        { id: 1, star: 5, name: 'son', feedback: 'test feedback' }
    ]);

    const handleSubmit = () => {
        if (!star || !feedback) {
            Alert.alert("Invalid input", "Both fields are required.");
            return;
        }
        const newFeedback = {
            id: id,
            star: star,
            name: name || 'Anonymous',
            feedback: feedback
        };
        setListFeedback([...listFeedback, newFeedback]);
        setId(id + 1);
        setStar(0);
        setFeedback('');
    };

    const feedbackCount = listFeedback.length;
    const averageRating = (feedbackCount > 0 ? (listFeedback.reduce((acc, curr) => acc + curr.star, 0) / feedbackCount).toFixed(1) : 0);

    const data = [
        { type: 'header', title: `${averageRating} (${feedbackCount} Reviews)` },
        ...listFeedback.map(item => ({ type: 'feedback', ...item })),
        { type: 'form' }
    ];

    const renderItem = ({ item }) => {
        if (item.type === 'header') {
            return <Text style={[styles.box2, styles.h1]}>{item.title}</Text>;
        } else if (item.type === 'feedback') {
            return (
                <View style={styles.container2}>
                    <View style={styles.avatarContainer}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: imageUri }}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.rating}>{item.star} / 5</Text>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.feedback}>{item.feedback}</Text>
                    </View>
                </View>
            );
        } else if (item.type === 'form') {
            return (
                <View>
                    <Text style={[styles.box2, styles.h1]}>Write review</Text>
                    <View style={[styles.star, styles.mg5]}>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <TouchableOpacity key={num} onPress={() => setStar(num)}>
                                <AntDesign
                                    name={star >= num ? "star" : "staro"}
                                    size={24}
                                    color="yellow"
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={[styles.box2, styles.h2]}>Review details</Text>
                    <TextInput
                        style={[styles.input, styles.mg5]}
                        placeholder="Enter your review"
                        value={feedback}
                        onChangeText={setFeedback}
                    />
                    <TouchableOpacity
                        style={[styles.button, styles.mg5]}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.txtButton}>Feedback</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ padding: 10 }}
            />
        </TouchableWithoutFeedback>
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
    favorite: {
        position: 'absolute',
        top: 50,
        right: 40,
        zIndex: 10,
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
});


export default SecondRoute;
