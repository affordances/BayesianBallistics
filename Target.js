import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Draggable } from "./Draggable";
import { Bullseye } from "./Bullseye";
import { Grid } from "./Grid";

export const Target = () => {
  const [targetDimensions, setTargetDimensions] = useState();
  return (
    <View style={styles.container}>
      <Bullseye />
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
