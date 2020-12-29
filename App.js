import React from "react";
import { StyleSheet, View } from "react-native";
import { Draggable } from "./Draggable";
import { Target } from "./Target";
import { Grid } from "./Grid";

const App = () => {
  return (
    <View style={styles.container}>
      <Target />
      <Grid />
      <Draggable />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
