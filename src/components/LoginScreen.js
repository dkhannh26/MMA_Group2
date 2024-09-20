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

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

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
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>Keep me signed in</Text>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>Or continue with</Text>

            <View style={styles.socialButtons}>
                <TouchableOpacity>
                    <Text style={styles.socialButton}>F</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.socialButton}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.socialButton}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signUpTextContainer}>
                <Text>Don't have an account? </Text>
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
        marginTop: 50,
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
        fontSize: 0,
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
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 100,
    },
    checkbox: {
        marginRight: 10,
        borderRadius: 50,
        borderColor: '#ccc'
    },
    label: {
        fontSize: 16,
    },
    forgotPassword: {
        marginLeft: 85,
        color: '#ff5b28',
    },
    loginButton: {
        backgroundColor: 'black',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
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
    },
    socialButton: {
        fontSize: 24,
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

