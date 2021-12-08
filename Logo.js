import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/forgetit.jpeg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  logo: {
    height: 350,
    width: 400,
  }
});