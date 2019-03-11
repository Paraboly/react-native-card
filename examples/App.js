import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "@paraboly/react-native-card";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          title="Title123123123123123123123123123123sadasdasd"
          iconName="home"
          defaultTitle=""
          iconType="Entypo"
          defaultContent=""
          onPress={() => {}}
          topRightText="50/301"
          bottomRightText="30 km"
          iconBackgroundColor="#fcdab5"
          content=""
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
