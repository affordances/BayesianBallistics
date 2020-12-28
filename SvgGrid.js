import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, Pattern, Rect, Path } from "react-native-svg";

export const SvgGrid = () => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
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
        <Rect width="100" height="100.25" fill="url(#grid)" />
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
