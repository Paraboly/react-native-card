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
  descStyle: {
    width: width * 0.6,
    top: 8,
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.theme.light.primaryGrey
  },
  destinationContainer: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginBottom: 8,
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
        bottom: width * 0.5 + 40,
        left: -width + 30
      },
      android: {
        bottom: width * 0.5 + 56,
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
        bottom: width * 0.5 - 10
      },
      android: {
        bottom: width * 0.5 - 10
      }
    })
  }
};
