import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Profile from './screens/profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile></Profile>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
