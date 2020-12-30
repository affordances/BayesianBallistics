import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Draggable } from "./Draggable";
import { Target } from "./Target";
import { Grid } from "./Grid";

const App = () => {
  const [targetDimensions, setTargetDimensions] = useState();
  return (
    <View style={styles.container}>
      <Target />
      <Grid setTargetDimensions={setTargetDimensions} />
      <Draggable targetDimensions={targetDimensions} />
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
