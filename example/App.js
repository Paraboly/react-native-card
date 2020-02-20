import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, SimpleCard } from "@paraboly/react-native-card";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          iconDisable
          title="Title"
          iconName="home"
          iconType="Entypo"
          onPress={() => {}}
          borderRadius={20}
          topRightText="50/306"
          bottomRightText="30 km"
          iconBackgroundColor="#fcd"
          textContainerNumberOfLines={null}
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Fusce a risus id libero sodales tempor sit amet non felis. Pellentesque id scelerisque risus. Aenean imperdiet vulputate auctor. Morbi fringilla nisi quis diam cursus tincidunt. Quisque consectetur porttitor efficitur. Nam in cursus neque. Vestibulum ornare scelerisque velit, in pretium mauris commodo ut. Nulla neque nulla, tristique sit amet nibh non, gravida laoreet nulla. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          topRightStyle={{
            fontSize: 12,
            fontWeight: "700",
            color: "#505e80"
          }}
          bottomRightStyle={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#505e80"
          }}
        />

        <View
          style={{
            marginTop: 16,
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <SimpleCard title="Dynamic width & height simple card" />
          <View style={{ marginTop: 16 }}>
            <SimpleCard
              title="Custom width & dynamic height simple card: Multiple Lines"
              styles={{ width: 200 }}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <SimpleCard title="Dynamic width & height simple card: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
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
    justifyContent: "center"
  }
});
