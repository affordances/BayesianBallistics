import React, { useEffect, useRef } from "react";
import { StyleSheet, PanResponder, Animated, View } from "react-native";
import { CIRCLE_SIZE } from "./constants";

const isWithinBounds = (layout, event) => {
  const { nativeEvent } = event;
  return (
    nativeEvent.pageX > layout.x &&
    nativeEvent.pageX < layout.x + layout.width &&
    nativeEvent.pageY > layout.y &&
    nativeEvent.pageY < layout.y + layout.height
  );
};

export const Draggable = (props) => {
  const pan = useRef(new Animated.ValueXY(0, 0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (e, gesture) => {
        return props.targetDimensions &&
          isWithinBounds(props.targetDimensions, e)
          ? pan.setValue({ x: gesture.dx, y: gesture.dy })
          : null;
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

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
