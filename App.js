import React from "react";
import { StyleSheet, View } from "react-native";
import { Draggable } from "./Draggable";
import { Target } from "./Target";
import { ReanimatedDraggable } from "./ReanimateDraggable";

const App = () => {
  return (
    <View style={styles.container}>
      <Target />
      <Draggable />
      <ReanimatedDraggable />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
