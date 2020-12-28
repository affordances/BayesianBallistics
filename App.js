import React from "react";
import { StyleSheet, View } from "react-native";
import { Draggable } from "./Draggable";
import { ViewTarget } from "./ViewTarget";
import { SvgGrid } from "./SvgGrid";
import { ReanimatedDraggable } from "./ReanimatedDraggable";
import { SvgTarget } from "./SvgTarget";

const App = () => {
  return (
    <View style={styles.container}>
      <SvgGrid />
      <SvgTarget />
      {/* <ViewTarget /> */}
      {/* <ReanimatedDraggable /> */}
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
