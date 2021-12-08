import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CalendarEvents from './CalendarEvents';
import Footer from './Footer';
import Header from './Header';
import Logo from './Logo';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Logo />
      <CalendarEvents />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});