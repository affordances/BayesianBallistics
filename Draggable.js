import React from "react";
import { StyleSheet, PanResponder, Animated, View } from "react-native";
import { CIRCLE_SIZE } from "./constants";

export const Draggable = () => {
  const pan = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: (_, gesture) =>
      pan.setValue({ x: gesture.dx, y: gesture.dy }),
    onPanResponderRelease: () => {
      pan.flattenOffset();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.dot]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
