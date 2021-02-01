import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { Target } from "./Target";

import { useShots } from "./hooks";

const App = () => {
  const useShotsProps = useShots();

  return (
    <View style={styles.container}>
      <Target {...useShotsProps} />
      <Button title="Next" onPress={() => useShotsProps.onSaveShot()} />
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
