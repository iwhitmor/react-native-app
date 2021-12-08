import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>
        AllDay Events Planner
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  Header: {
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 50,
    marginTop: 40,
    width: width,
  },
});

export default Header;