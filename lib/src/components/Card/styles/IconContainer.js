import { Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");

export function iconCircle(iconDisable, iconBackgroundColor) {
  return {
    width,
    height: width,
    borderRadius: width,
    position: "absolute",
    backgroundColor: iconBackgroundColor,
    display: iconDisable ? "none" : "flex"
  };
}

export default {
  iconContainer: {
    position: "absolute",
    ...Platform.select({
      ios: {
        bottom: width * 0.55 + 10,
        left: -width + 30
      },
      android: {
        bottom: width * 0.55 + 10,
        left: -width + 30
      }
    })
  },
  iconStyle: {
    right: 10,
    position: "absolute",
    ...Platform.select({
      ios: {
        bottom: width * 0.45 + 7
      },
      android: {
        bottom: width * 0.45 + 7
      }
    })
  }
};
