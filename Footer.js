import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.Footer}>
        "Focus on being productive instead of busy." - Tim Ferriss
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  Footer: {
    backgroundColor: "grey",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    width: width,
    height: 75
  },
});

export default Footer;