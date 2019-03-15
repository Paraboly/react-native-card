import React from "react";
import { StyleSheet, View } from "react-native";
// import Card from "@paraboly/react-native-card";
import Card from "./lib/src/Card";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          title="Title"
          iconName="home"
          defaultTitle=""
          iconType="Entypo"
          defaultContent=""
          onPress={() => {}}
          topRightText="50/301"
          bottomRightText="30 km"
          iconBackgroundColor="#fcdab5"
          content="Lorem impsum"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
