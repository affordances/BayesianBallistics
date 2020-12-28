import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Defs, Pattern, Rect, Path } from "react-native-svg";

export const SvgTarget = () => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
        {[1, 2, 3, 4, 5].map((r, i) => (
          <Circle
            key={i}
            cx="50"
            cy="50"
            r={r * 10}
            fill="rgb(255, 0, 0, 0.1)"
          />
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "black",
    width: "100%",
    height: "100%",
    zIndex: 1,
    position: "absolute",
  },
});