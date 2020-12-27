import React from "react";
import { StyleSheet, View } from "react-native";
import { Draggable } from "./Draggable";
import { ViewTarget } from "./ViewTarget";
import { SvgTarget } from "./SvgTarget";
import { ReanimatedDraggable } from "./ReanimatedDraggable";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <ViewTarget /> */}
      {/* <SvgTarget /> */}
      <ReanimatedDraggable />
      <Draggable />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    // zIndex: 0,
  },
});

export default App;
