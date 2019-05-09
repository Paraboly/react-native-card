import { Platform } from "react-native";

export function containerGlue(backgroundColor) {
  return {
    padding: 12,
    borderRadius: 12,
    backgroundColor: backgroundColor || "white"
  };
}

export function cardTitleStyle(titleFontSize, titleTextColor, titleFontFamily) {
  return {
    alignItems: "center",
    color: titleTextColor,
    alignContent: "center",
    fontSize: titleFontSize,
    justifyContent: "center",
    fontFamily: titleFontFamily
  };
}

export default {
  container: {
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16
  },
  shadowStyle: {
    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowColor: "rgba(0,0,0,0.25)",
        shadowOffset: {
          width: 2,
          height: 1
        }
      },
      android: {
        elevation: 2
      }
    })
  }
};
