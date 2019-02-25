import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../src";

const App = () => (
  <View style={styles.container}>
    <Card
      iconDisable
      defaultTitle=""
      numberOfLines={3}
      title="Title"
      content="Display Address"
      defaultContent=""
      rightBottomText="134 km"
      onPress={() => {}}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
