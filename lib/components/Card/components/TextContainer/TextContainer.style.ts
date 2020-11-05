import { ViewStyle, TextStyle, StyleSheet, Dimensions } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

export const _container = (iconDisable: boolean): ViewStyle => ({
  flexDirection: "column",
  left: iconDisable ? 0 : 48,
});

export const _descriptionTextStyle = (iconDisable: boolean): TextStyle => ({
  top: 5,
  fontSize: 14,
  minHeight: 50,
  lineHeight: 15,
  letterSpacing: 0,
  color: "#959aa8",
  textAlign: "left",
  width: ScreenWidth * (iconDisable ? 0.6 : 0.5),
});

interface Style {
  titleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  titleTextStyle: {
    fontSize: 18,
    lineHeight: 18,
    color: "#505e80",
    letterSpacing: 0,
    width: ScreenWidth * 0.5,
  },
});
