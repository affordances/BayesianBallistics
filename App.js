import React, { useState } from "react";
import {
  Button,
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Svg, {
  Circle,
  Defs,
  G,
  Pattern,
  Rect,
  Path,
  Text,
  TSpan,
} from "react-native-svg";

const App = () => {
  const [shots, setShots] = useState([]);
  const [distance, setDistance] = useState("");

  const drawTarget = () => {
    return (
      <Pressable
        onPress={(event) => {
          Keyboard.dismiss();
          const newShot = [
            event.nativeEvent.locationX / 3,
            event.nativeEvent.locationY / 3,
          ];
          setShots((prevState) => [...prevState, newShot]);
        }}
      >
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
          {shots.map(([x, y], i) => (
            <G key={i} x={x} y={y}>
              <Circle cx="0" cy="0" r="4" fill="black" />
              <Text
                x="0"
                y="0"
                alignmentBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="4"
                fontWeight={300}
              >
                {i + 1}
              </Text>
            </G>
          ))}
        </Svg>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={{ height: 40, width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setDistance(text)}
        value={distance}
      />
      <View style={styles.innerContainer}>{drawTarget()}</View>
      <Button title="Reset" onPress={() => setShots([])} />
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
  innerContainer: {
    height: 301.5,
    width: 301.5,
  },
});

export default App;
