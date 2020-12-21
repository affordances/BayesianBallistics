import React from "react";
import { StyleSheet, View } from "react-native";

const BASE_RING_SIZE = 350;

export const Target = () => {
  return (
    <View
      style={{
        width: BASE_RING_SIZE,
        height: BASE_RING_SIZE,
        borderRadius: BASE_RING_SIZE / 2,
        ...styles.ring,
      }}
    >
      <View
        style={{
          width: BASE_RING_SIZE * 0.8,
          height: BASE_RING_SIZE * 0.8,
          borderRadius: (BASE_RING_SIZE * 0.8) / 2,
          ...styles.ring,
        }}
      >
        <View
          style={{
            width: BASE_RING_SIZE * 0.6,
            height: BASE_RING_SIZE * 0.6,
            borderRadius: (BASE_RING_SIZE * 0.6) / 2,
            ...styles.ring,
          }}
        >
          <View
            style={{
              width: BASE_RING_SIZE * 0.4,
              height: BASE_RING_SIZE * 0.4,
              borderRadius: (BASE_RING_SIZE * 0.4) / 2,
              ...styles.ring,
            }}
          >
            <View
              style={{
                width: BASE_RING_SIZE * 0.2,
                height: BASE_RING_SIZE * 0.2,
                borderRadius: (BASE_RING_SIZE * 0.2) / 2,
                ...styles.ring,
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ring: {
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});
