import React from "react";
import { StyleSheet, Animated, View } from "react-native";
import { CIRCLE_SIZE } from "./constants";

export const Draggable = (props) => {
  return (
    <View style={styles.dotContainer}>
      <Animated.View
        {...props.panResponder.panHandlers}
        style={[props.pan.getLayout(), styles.dot]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    zIndex: 2,
    position: "absolute",
  },
  dot: {
    backgroundColor: "black",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
});
