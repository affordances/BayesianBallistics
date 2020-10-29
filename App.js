import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

const App = (props) => {
  return (
    <View style={styles.container}>
      <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        {/* <Rect
          x="15"
          y="15"
          width="70"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="yellow"
        /> */}
      </Svg>
      blah blah
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
