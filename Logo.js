import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/calendar.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  logo: {
    marginTop: 30,
    height: 375,
    width: 375,
  }
});