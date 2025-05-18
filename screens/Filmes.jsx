import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as filme from "../services/Filme.js";

const Filmes = () => {
  filme.buscarPopulares(1).then((data) => {
    console.log(data);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Filmes</Text>
    </View>
  );
}

export default Filmes;

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