import { Dimensions, Platform } from "react-native";
import colors from "./colors.style";

const { width } = Dimensions.get("window");

export const _shadowStyle = {
  ...Platform.select({
    ios: {
      shadowColor: "rgba(0, 0, 0, 0.11)",
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

export function container(containerHeight, iconDisable) {
  return {
    flex: 1,
    marginLeft: 16,
    marginTop: 6.5,
    marginRight: 16,
    marginBottom: 3,
    borderRadius: 15,
    overflow: "hidden",
    width: width * 0.92,
    alignSelf: "baseline",
    backgroundColor: "#fcfcfc",
    height: containerHeight || 90,
    maxHeight: containerHeight || 90,
    overflow: iconDisable ? "visible" : "hidden"
  };
}

export function descStyle(iconDisable, contentTextColor) {
  return {
    top: 5,
    height: 40,
    fontSize: 14,
    lineHeight: 13,
    letterSpacing: 0,
    textAlign: "left",
    width: width * (iconDisable ? 0.6 : 0.5),
    color: contentTextColor || colors.theme.light.primaryGrey
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
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  titleStyle: {
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    width: width * 0.7,
    color: colors.theme.light.primaryDark
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
  },
  iconContainer: {
    position: "absolute",
    ...Platform.select({
      ios: {
        bottom: width * 0.55 + 10,
        left: -width + 30
      },
      android: {
        bottom: width * 0.5 + 10,
        left: -width + 30
      }
    })
  },
  iconCircle: {
    width,
    height: width,
    borderRadius: width,
    position: "absolute"
  },
  iconStyle: {
    position: "absolute",
    right: 10,
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
