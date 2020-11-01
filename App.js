import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Defs, Pattern, Rect, Path } from "react-native-svg";

const App = () => {
  const drawTarget = () => {
    return (
      <Svg height="100%" width="100%" viewBox="0 0 100.25 100.25">
        {[1, 2, 3, 4, 5].map((r) => (
          <Circle cx="50" cy="50" r={r * 10} fill="rgb(255, 0, 0, 0.1)" />
        ))}
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
              stroke-width="0.5"
            />
          </Pattern>
        </Defs>
        <Rect width="100.25" height="100.25" fill="url(#grid)" />
      </Svg>
    );
  };

  return (
    <View style={styles.container}>
      <div
        style={{
          height: "500px",
          width: "500px",
        }}
      >
        {drawTarget()}
      </div>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
