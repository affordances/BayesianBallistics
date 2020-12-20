import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Defs, Pattern, Rect, Path } from "react-native-svg";
import Animated, {
  cond,
  eq,
  add,
  set,
  Value,
  event,
} from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const App = () => {
  const dragX = useRef(new Value(0));
  const dragY = useRef(new Value(0));
  const offsetX = useRef(new Value(150.75));
  const offsetY = useRef(new Value(160.75));
  const gestureState = useRef(new Value(-1));
  const onGestureEvent = event([
    {
      nativeEvent: {
        translationX: dragX.current,
        translationY: dragY.current,
        state: gestureState.current,
      },
    },
  ]);
  const transX = cond(
    eq(gestureState.current, State.ACTIVE),
    add(offsetX.current, dragX.current),
    set(offsetX.current, add(offsetX.current, dragX.current))
  );
  const transY = cond(
    eq(gestureState.current, State.ACTIVE),
    add(offsetY.current, dragY.current),
    set(offsetY.current, add(offsetY.current, dragY.current))
  );

  return (
    <View style={styles.container}>
      <PanGestureHandler
        maxPointers={1}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onGestureEvent}
      >
        <Animated.View style={styles.innerContainer}>
          <Animated.View
            style={[
              styles.shot,
              {
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
          </Svg>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const CIRCLE_SIZE = 20;

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
    zIndex: 1,
  },
  shot: {
    backgroundColor: "black",
    marginLeft: -(CIRCLE_SIZE / 2),
    marginTop: -(CIRCLE_SIZE / 2),
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    zIndex: 2,
  },
});

export default App;
