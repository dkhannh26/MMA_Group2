import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Import thêm icon từ Ionicons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ResetPasswordScreen = () => {
    const navigation = useNavigation();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isNewPasswordVisible, setNewPasswordVisible] = useState(false); // Trạng thái để quản lý hiển thị mật khẩu mới
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Trạng thái để quản lý hiển thị mật khẩu xác nhận

    const handleResetPassword = () => {
        if (newPassword && confirmPassword) {
            if (newPassword === confirmPassword) {
                alert('Password has been reset successfully!');
                navigation.navigate('Login');
            } else {
                alert('Passwords do not match.');
            }
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <View style={styles.container}>
            <MaterialIcons name="lock-reset" size={70} color="black" />
            <Text style={styles.title}>Reset Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter new password"
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry={!isNewPasswordVisible} // Sử dụng trạng thái để hiển thị hoặc ẩn mật khẩu mới
                />
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => setNewPasswordVisible(!isNewPasswordVisible)}
                >
                    <Ionicons name={isNewPasswordVisible ? "eye" : "eye-off"} size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!isConfirmPasswordVisible} // Sử dụng trạng thái để hiển thị hoặc ẩn mật khẩu xác nhận
                />
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
                >
                    <Ionicons name={isConfirmPasswordVisible ? "eye" : "eye-off"} size={24} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 24,
    },
    input: {
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        bottom: 40
    },
    button: {
        width: '100%',
        padding: 16,
        backgroundColor: 'black',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ResetPasswordScreen;
