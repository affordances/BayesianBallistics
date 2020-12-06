import React, { useState } from "react";
import {
  Button,
  Dimensions,
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
} from "react-native-svg";
import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const { cond, eq, add, set, Value, event, interpolate, Extrapolate } = Animated;

const App = () => {
  const [shots, setShots] = useState([]);
  const [distance, setDistance] = useState("");

  const dragX = new Value(0);
  const dragY = new Value(0);
  const offsetX = new Value(width / 2);
  const offsetY = new Value(height / 2);
  const gestureState = new Value(-1);
  const onGestureEvent = event([
    {
      nativeEvent: {
        translationX: dragX,
        translationY: dragY,
        state: gestureState,
      },
    },
  ]);
  const transX = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetX, dragX),
    set(offsetX, add(offsetX, dragX)),
  );
  const transY = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetY, dragY),
    set(offsetY, add(offsetY, dragY)),
  );
  const borderWidth = interpolate(transX, {
    inputRange: [0, width],
    outputRange: [0, 5],
    extrapolate: Extrapolate.CLAMP
  });
  const opacity = interpolate(transY, {
    inputRange: [0, height],
    outputRange: [0.1, 1],
  });

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
      <PanGestureHandler
          maxPointers={1}
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onGestureEvent}
        >
          <Animated.View
            style={[
              styles.box,
              {
                opacity: opacity,
                borderWidth: borderWidth,
                transform: [
                  {
                    translateX: transX,
                  },
                  {
                    translateY: transY,
                  },
                ],
              },
            ]}
          />
        </PanGestureHandler>
      {/* <TextInput
        keyboardType="numeric"
        style={{ height: 40, width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setDistance(text)}
        value={distance}
      />
      <View style={styles.innerContainer}>{drawTarget()}</View>
      <Button title="Reset" onPress={() => setShots([])} /> */}
    </View>
  );
};

const CIRCLE_SIZE = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  innerContainer: {
    height: 301.5,
    width: 301.5,
  },
  box: {
    backgroundColor: "tomato",
    marginLeft: -(CIRCLE_SIZE / 2),
    marginTop: -(CIRCLE_SIZE / 2),
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderColor: "#000"
  },
});

export default App;
