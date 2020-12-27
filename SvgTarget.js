import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Defs, Pattern, Rect, Path } from "react-native-svg";

export const SvgTarget = () => {
  return (
    <View style={styles.target}>
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
        {/* {[1, 2, 3, 4, 5].map((r, i) => (
        <Circle key={i} cx="50" cy="50" r={r * 10} fill="rgb(255, 0, 0, 0.1)" />
      ))} */}
        <Defs>
          <Pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <Path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="gray"
              stroke-width="1"
            />
          </Pattern>
        </Defs>
        <Rect width="100" height="100" fill="url(#grid)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  target: {
    zIndex: 1,
  },
});
