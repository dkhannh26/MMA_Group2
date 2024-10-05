import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Import thêm icon từ Ionicons

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const [isRetypePasswordVisible, setRetypePasswordVisible] = useState(false); // State for retype password visibility

  const handleSignUp = () => {
    if (name && email && password && retypePassword && isSelected) {
      navigation.navigate('Verify', { process: 'signUp' });
    } else {
      alert('Please fill all fields and accept the terms of service.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/*
      <Image
        source={require('../../assets/image/dotai2.png')}
        style={styles.icon}
      />*/}
      <Text style={styles.headerText}>Let's Get Started</Text>
      <Text style={styles.subText}>Create your new account and find more beautiful destinations</Text>

      <Text style={styles.inputLabel}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />

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
          secureTextEntry={!isPasswordVisible} // Toggle visibility
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        >
          <Ionicons name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.inputLabel}>Re-type Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Re-enter your password"
          value={retypePassword}
          onChangeText={setRetypePassword}
          secureTextEntry={!isRetypePasswordVisible} // Toggle visibility
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setRetypePasswordVisible(!isRetypePasswordVisible)}
        >
          <Ionicons name={isRetypePasswordVisible ? "eye" : "eye-off"} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.checkboxLabel}>Accept terms of service</Text>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signInTextContainer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logInText}>Sign In</Text>
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
    // marginTop: 50,
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    // marginTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    // marginBottom: 20,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    bottom: 40
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
    borderRadius: 50,
    borderColor: '#ccc'
  },
  checkboxLabel: {
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signInTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logInText: {
    color: '#ff5b28',
  },
});

export default SignUpScreen;