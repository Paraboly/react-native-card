import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, SimpleCard } from "@paraboly/react-native-card";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          iconDisable={true}
          title="Title"
          onPress={() => {}}
          borderRadius={20}
          containerHeight={100}
          topRightText="50/306"
          bottomRightText="30 km"
          iconBackgroundColor="#fcd"
          textContainerNumberOfLines={3}
          description="Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Donec sed odio dui."
          topRightTextStyle={{
            fontSize: 12,
            fontWeight: "700",
            color: "#505e80",
          }}
          bottomRightTextStyle={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#505e80",
          }}
        />

        <View
          style={{
            marginTop: 16,
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <SimpleCard text="Dynamic width & height simple card" />
          <View style={{ marginTop: 16 }}>
            <SimpleCard
              text="Custom width & dynamic height simple card: Multiple Lines"
              style={{ width: 200 }}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <SimpleCard text="Dynamic width & height simple card: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
