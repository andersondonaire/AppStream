import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Animes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Animes</Text>
    </View>
  );
}

export default Animes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 24,
    color: "#333",
  },
});