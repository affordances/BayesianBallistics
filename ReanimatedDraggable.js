import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const { cond, eq, add, set, Value, event } = Animated;

export const ReanimatedDraggable = () => {
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
    <View>
      <PanGestureHandler
        style={{ zIndex: 2 }}
        maxPointers={1}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onGestureEvent}
      >
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
      </PanGestureHandler>
    </View>
  );
};

const CIRCLE_SIZE = 20;

const styles = StyleSheet.create({
  shot: {
    backgroundColor: "black",
    marginLeft: -(CIRCLE_SIZE / 2),
    marginTop: -(CIRCLE_SIZE / 2),
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
});
