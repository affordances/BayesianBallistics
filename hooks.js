import { useEffect, useMemo, useRef, useState } from "react";
import { PanResponder, Animated } from "react-native";

const isWithinBounds = (layout, event) => {
  const { nativeEvent } = event;
  return (
    nativeEvent.pageX > layout.x &&
    nativeEvent.pageX < layout.x + layout.width &&
    nativeEvent.pageY > layout.y &&
    nativeEvent.pageY < layout.y + layout.height
  );
};

export const useShots = () => {
  const [
    mostRecentUnsavedShotPosition,
    setMostRecentUnsavedShotPosition,
  ] = useState([]);
  const [savedShots, setSavedShots] = useState([]);
  const [targetDimensions, setTargetDimensions] = useState(null);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value,
          });
          pan.setValue({ x: 0, y: 0 });
        },
        onPanResponderMove: (e, gesture) => {
          return isWithinBounds(targetDimensions, e)
            ? pan.setValue({ x: gesture.dx, y: gesture.dy })
            : null;
        },
        onPanResponderRelease: () => {
          pan.flattenOffset();
        },
      }),
    [targetDimensions]
  );

  const onSaveShot = () => {
    setSavedShots((prev) => {
      return savedShots.indexOf(mostRecentUnsavedShotPosition) === -1
        ? [...prev, mostRecentUnsavedShotPosition]
        : prev;
    });
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    pan.addListener((value) => {
      setMostRecentUnsavedShotPosition(value);
    });

    return () => {
      pan.removeAllListeners();
    };
  }, []);

  return {
    mostRecentUnsavedShotPosition,
    onSaveShot,
    pan,
    panResponder,
    savedShots,
    setMostRecentUnsavedShotPosition,
    setSavedShots,
    setTargetDimensions,
    targetDimensions,
  };
};
