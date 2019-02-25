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
    width: width * (iconDisable ? 0.6 : 0.5),
    top: 3,
    fontSize: 14,
    lineHeight: 13,
    letterSpacing: 0,
    textAlign: "left",
    color: contentTextColor || colors.theme.light.primaryGrey
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
    color: colors.theme.light.primaryDark
  },

  destinationContainer: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    bottom: 20,
    opacity: 1
  },
  destinationTextStyle: {
    alignContent: "flex-end",
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "right",
    color: "#505e80"
  },
  iconContainer: {
    position: "absolute",
    ...Platform.select({
      ios: {
        bottom: width * 0.6 + 10,
        left: -width + 30
      },
      android: {
        bottom: width * 0.6 + 10,
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
