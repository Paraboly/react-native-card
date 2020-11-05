import { ViewStyle, TextStyle, StyleSheet, Dimensions } from "react-native";
const { width: ScreenWidth } = Dimensions.get("window");

interface Style {
  contentContainer: ViewStyle;
  topRightTextStyle: TextStyle;
  bottomRightTextStyle: TextStyle;
  topRightContainer: ViewStyle;
  bottomRightContainer: ViewStyle;
  shadowStyle: ViewStyle;
}

export const _container = (
  containerHeight: number | undefined,
  iconDisable: boolean,
  borderRadius: number,
  backgroundColor: string,
): ViewStyle => ({
  backgroundColor,
  height: containerHeight,
  width: ScreenWidth * 0.92,
  borderRadius: borderRadius || 15,
  overflow: iconDisable ? "visible" : "hidden",
});

export default StyleSheet.create<Style>({
  contentContainer: {
    margin: 16,
  },
  bottomRightContainer: {
    bottom: -5,
    opacity: 1,
    position: "absolute",
    alignSelf: "flex-end",
  },
  topRightContainer: {
    top: 0,
    opacity: 1,
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  bottomRightTextStyle: {
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0,
    color: "#505e80",
    textAlign: "right",
    alignContent: "flex-end",
  },
  topRightTextStyle: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0,
    color: "#505e80",
    textAlign: "right",
    alignContent: "flex-end",
  },
  shadowStyle: {
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
