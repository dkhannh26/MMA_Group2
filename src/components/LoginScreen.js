// import React, { useState } from 'react';
// import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import CheckBox from 'expo-checkbox';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSelected, setSelection] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('./assets/image/dotai1.png')}
//         style={styles.icon}
//       />
//       <Text style={styles.welcomeText}>Welcome Back!</Text>
//       <Text style={styles.subText}>Stay signed in with your account to make searching easier</Text>
//       <Text style={styles.inputLabel}>Email</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <Text style={styles.inputLabel}>Password</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <View style={styles.checkboxContainer}>
//         <CheckBox
//           value={isSelected}
//           onValueChange={setSelection}
//           style={styles.checkbox}
//         />
//         <Text style={styles.label}>Keep me signed in</Text>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot password?</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.loginButton}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>

//   <Text style={styles.orText}>Or continue with</Text>

//   <View style={styles.socialButtons}>
//     <TouchableOpacity>
//       <Text style={styles.socialButton}>F</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//       <Text style={styles.socialButton}>G</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//       <Text style={styles.socialButton}>X</Text>
//     </TouchableOpacity>
//   </View>
//       <View style={styles.answer}>
//         <Text>You Don't have an account? </Text>
//         <TouchableOpacity>
//           <Text style={styles.signupText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 25,
//     marginTop: 50,
//   },
//   icon: {
//     width: 150,
//     height: 150,
//     marginHorizontal: 'auto',
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center'
//   },
//   subText: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//     textAlign: 'center'
//   },
//   inputLabel: {
//     fontSize: 0,
//     marginBottom: 5,
//     fontWeight: 'bold'
//   },
//   input: {
//     height: 60,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 100,
//   },
//   checkbox: {
//     marginRight: 10,
//     borderRadius: 50,
//     borderColor: '#ccc'
//   },
//   label: {
//     fontSize: 16,
//   },
//   forgotPassword: {
//     marginLeft: 85,
//     color: '#ff5b28',
//   },
//   loginButton: {
//     backgroundColor: 'black',
//     padding: 20,
//     alignItems: 'center',
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   orText: {
//     textAlign: 'center',
//   },
//   socialButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 35,
//   },
//   socialButton: {
//     fontSize: 24,
//   },
//   signupText: {
//     color: '#ff5b28',
//   },
//   answer: {
//     flexDirection: 'row',
//     marginHorizontal: 'auto'
//   }
// });

// export default LoginScreen;



import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons'; // Import thêm icon từ Ionicons

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false); // Trạng thái để quản lý hiển thị mật khẩu

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Image
                source={require('../../assets/image/dotai2.png')}
                style={styles.icon}
            />
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.subText}>Stay signed in with your account to make searching easier</Text>

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible} // Sử dụng trạng thái để hiển thị hoặc ẩn mật khẩu
                />
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => setPasswordVisible(!isPasswordVisible)}
                >
                    <Ionicons name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.checkboxContainer}>
                <View style={styles.checkboxLabel}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text>Keep me signed in</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>Or continue with</Text>

            <View style={styles.socialButtons}>
                <TouchableOpacity>
                    <EvilIcons name="sc-facebook" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="google" size={22} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome6 name="x-twitter" size={22} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.signUpTextContainer}>
                <Text>You don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 25,
    },
    icon: {
        width: 150,
        height: 150,
        marginHorizontal: 'auto',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    subText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center'
    },
    inputLabel: {
        marginBottom: 5,
        fontWeight: 'bold'
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
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: 100,
    },
    checkbox: {
        borderRadius: 50,
        borderColor: '#ccc',
        marginRight: 10
    },
    checkboxLabel:{
        flexDirection: 'row',
    },
    label: {
        fontSize: 16,
    },
    forgotPassword: {
        // marginLeft: 85,
        color: '#ff5b28',
    },
    loginButton: {
        backgroundColor: 'black',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    orText: {
        textAlign: 'center',
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 35,
        width: '100%',
    },
    signUpTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signUpText: {
        color: '#ff5b28',
    },
});

export default LoginScreen;

