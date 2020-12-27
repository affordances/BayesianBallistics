import React, { useRef } from "react";
import { StyleSheet, View, PanResponder, Animated } from "react-native";
import { CIRCLE_SIZE } from "./constants";

export const Draggable = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x,
          y: pan.y,
        });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        return;
      },
    })
  ).current;

  const renderDraggable = () => {
    const panStyle = {
      transform: pan.getTranslateTransform(),
    };
    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={[panStyle, styles.circle]}
      />
    );
  };

  return <View>{renderDraggable()}</View>;
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "green",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
});
