import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const backgroundColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 2000, // 3 giây
      useNativeDriver: false,
    }).start(() => {
      navigation.replace('Onboarding'); // Chuyển sang màn hình đăng nhập sau 3 giây
    });
  }, [backgroundColor, navigation]);

  const backgroundColorInterpolation = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000000', '#FFFFFF'], // Từ màu trắng sang màu cam
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor: backgroundColorInterpolation }]}>
      <Image 
        source={require('../../assets/image/dotai2.png')} // Điều chỉnh đường dẫn nếu cần
        style={styles.icon}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.fillo}>Fillo</Text>
        <Text style={styles.tripo}>Tripo</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
  width: 200,
  height: 200,
  marginTop: -50,
  marginBottom:-40
},
  titleContainer: {
    flexDirection: 'row',
  },
  fillo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Màu đen
  },
  tripo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500', // Màu cam
  },
});

export default SplashScreen;
