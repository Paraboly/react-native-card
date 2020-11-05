import { Dimensions, Platform } from "react-native";
const { width } = Dimensions.get("window");

export const _shadowStyle = {
  ...Platform.select({
    ios: {
      shadowColor: "rgba(0,0,0,0.11)",
      shadowOffset: {
        width: 1.5,
        height: 1.5
      },
      shadowRadius: 6,
      shadowOpacity: 1
    },
    android: {
      elevation: 2
    }
  })
};

export function container(containerHeight, iconDisable, borderRadius) {
  return {
    width: width * 0.92,
    backgroundColor: "#fcfcfc",
    height: containerHeight || null,
    borderRadius: borderRadius || 15,
    overflow: iconDisable ? "visible" : "hidden"
  };
}

export function bottomRightTextStyle(brFontSize, brColor) {
  return {
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "right",
    alignContent: "flex-end",
    fontSize: brFontSize || 20,
    color: brColor || "#505e80"
  };
}
export function topRightTextStyle(trFontSize, trColor) {
  return {
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "right",
    alignContent: "flex-end",
    fontSize: trFontSize || 14,
    color: trColor || "#505e80"
  };
}

export default {
  contentContainer: {
    margin:16
  },
  bottomRightContainer: {
    bottom: -5,
    opacity: 1,
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "flex-end"
  },
  topRightContainer: {
    top: 0,
    opacity: 1,
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "flex-end"
  }
};
