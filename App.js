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
    // borderColor: "black",
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
