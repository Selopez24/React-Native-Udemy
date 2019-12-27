import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <Text>Number of Rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <MainButton onPress={() => props.onRestart()}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: "100%",
    width: "100%"
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  }
});

export default GameOverScreen;
