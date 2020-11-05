import { ViewStyle, StyleSheet, Dimensions, Platform } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  iconContainer: ViewStyle;
  iconStyle: ViewStyle;
  shadowStyle: ViewStyle;
}

export const iconCircle = (
  iconDisable: boolean,
  iconBackgroundColor: string,
): ViewStyle => ({
  width: ScreenWidth,
  height: ScreenWidth,
  borderRadius: ScreenWidth / 2,
  backgroundColor: iconBackgroundColor,
  display: iconDisable ? "none" : "flex",
  position: "absolute",
});

export default StyleSheet.create<Style>({
  iconContainer: {
    position: "absolute",
    ...Platform.select({
      ios: {
        bottom: ScreenWidth * 0.55 + 10,
        left: -ScreenWidth + 30,
      },
      android: {
        bottom: ScreenWidth * 0.55 + 10,
        left: -ScreenWidth + 30,
      },
    }),
  },
  iconStyle: {
    right: 10,
    position: "absolute",
    ...Platform.select({
      ios: {
        bottom: ScreenWidth * 0.45 + 7,
      },
      android: {
        bottom: ScreenWidth * 0.45 + 7,
      },
    }),
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
