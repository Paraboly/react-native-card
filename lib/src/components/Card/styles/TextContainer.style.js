import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export function container(iconDisable) {
  return {
    // height: 65,
    flexDirection: "column",
    left: iconDisable ? 0 : 48
  };
}

export function _contentStyle(
  iconDisable,
  contentTextColor,
  contextFontSize,
  contextFontFamily
) {
  return {
    top: 5,
    // height: 45,
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "left",
    color: contentTextColor,
    fontFamily: contextFontFamily,
    fontSize: contextFontSize || 14,
    width: width * (iconDisable ? 0.6 : 0.5)
  };
}

export function _titleStyle(titleColor, titleFontSize, titleFontFamily) {
  return {
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: titleColor,
    width: width * 0.5,
    fontSize: titleFontSize,
    fontFamily: titleFontFamily
  };
}
