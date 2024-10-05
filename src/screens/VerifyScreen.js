import React, { useState, useEffect, useRef } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Keyboard } from 'react-native';

const VerifyScreen = ({ route, navigation }) => {
  const { process } = route.params;
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChangeText = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    } else if (index === 3) {
      Keyboard.dismiss();
    }
  };

  const handleVerify = () => {
    if (code.every(digit => digit !== '')) {
      if (process === 'signUp') {
        navigation.navigate('Success');
      } else if (process === 'forgotPassword') {
        navigation.navigate('ResetPassword');
      }
    } else {
      alert('Please enter all four digits.');
    }
  };

  const handleResendCode = () => {
    setCode(['', '', '', '']);
    setTimer(30);
    // Add any additional logic to resend the code here
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Image
        source={require('../../assets/image/verify.jpg')}
        style={styles.icon}
      />
      <Text style={styles.headerText}>Check Your Email</Text>
      <Text style={styles.subText}>A code has been sent to your email</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </View>
      <Text style={styles.timerText}>Code expires in: <Text style={styles.resendText}>{`00:${timer < 10 ? `0${timer}` : timer}`}</Text> </Text>
      <TouchableOpacity onPress={handleResendCode} disabled={timer > 0}>
        <Text style={styles.resendText}>Didn't receive code? Resend Code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 65,
    height: 100,
    marginHorizontal: 'auto',
    marginBottom: 20,
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
    marginBottom: 20,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5,
  },
  timerText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  resendText: {
    fontSize: 16,
    color: '#ff5b28',
    marginBottom: 200,
  },
  verifyButton: {
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default VerifyScreen;
