import React from "react";
import { StyleSheet, View } from "react-native";
import { Draggable } from "./Draggable";
import { ViewTarget } from "./ViewTarget";
import { ViewGrid } from "./ViewGrid";

const App = () => {
  return (
    <View style={styles.container}>
      <ViewTarget />
      <ViewGrid />
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
