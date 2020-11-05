import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  shadowStyle: ViewStyle;
  cardTextStyle: TextStyle;
}

export const _containerGlue = (backgroundColor: string): ViewStyle => ({
  padding: 12,
  borderRadius: 12,
  backgroundColor: backgroundColor,
});

export default StyleSheet.create<Style>({
  container: {
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16,
  },
  shadowStyle: {
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOffset: {
      width: 2,
      height: 1,
    },
  },
  cardTextStyle: {
    fontSize: 14,
    color: "#505e80",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
