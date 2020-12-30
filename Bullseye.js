import React from "react";
import { StyleSheet, View } from "react-native";

import { BASE_TARGET_COLOR, TARGET_SIDE } from "./constants";

export const Bullseye = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: TARGET_SIDE,
          height: TARGET_SIDE,
          borderRadius: TARGET_SIDE / 2,
          ...styles.ring,
        }}
      >
        <View
          style={{
            width: TARGET_SIDE * 0.8,
            height: TARGET_SIDE * 0.8,
            borderRadius: (TARGET_SIDE * 0.8) / 2,
            ...styles.ring,
          }}
        >
          <View
            style={{
              width: TARGET_SIDE * 0.6,
              height: TARGET_SIDE * 0.6,
              borderRadius: (TARGET_SIDE * 0.6) / 2,
              ...styles.ring,
            }}
          >
            <View
              style={{
                width: TARGET_SIDE * 0.4,
                height: TARGET_SIDE * 0.4,
                borderRadius: (TARGET_SIDE * 0.4) / 2,
                ...styles.ring,
              }}
            >
              <View
                style={{
                  width: TARGET_SIDE * 0.2,
                  height: TARGET_SIDE * 0.2,
                  borderRadius: (TARGET_SIDE * 0.2) / 2,
                  ...styles.ring,
                }}
              ></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
  },
  ring: {
    backgroundColor: BASE_TARGET_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
});
