import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import Card from "@paraboly/react-native-card";
import Card from "./lib/src/Card";

export default class App extends React.Component {
  render() {
    return (
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
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
