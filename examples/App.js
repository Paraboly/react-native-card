import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "@paraboly/react-native-card";

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
          numberOfLines={3}
          onPress={() => {}}
          topRightText="50/301"
          bottomRightText="30 km"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
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
