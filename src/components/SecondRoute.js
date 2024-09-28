import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { Alert, Image, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from '../../assets/css/styles.js';
import { useRoute } from '@react-navigation/native';

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

export default SecondRoute;
