import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { Target } from "./Target";

const App = () => {
  return (
    <View style={styles.container}>
      <Target />
      <Button title="Next" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
