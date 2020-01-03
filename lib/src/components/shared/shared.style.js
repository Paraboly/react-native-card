import colors from "./colors.style";
import { Platform } from "react-native";
import { isIPhoneXFamily } from "@freakycoder/react-native-helpers";
export const isAndroid = Platform.OS === "android";

export const ifIPhoneXHeader = {
  marginTop: isIPhoneXFamily() ? 44 : 16
};

export const shadowStyle = {
  buttonStyle: {
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 1 },
    shadowColor: colors.theme.light.shadowColor
  },
  topStyle: {
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: -6 },
    shadowColor: colors.theme.light.shadowColor
  }
};

export const defaultShadowStyle = isAndroid
  ? {
      elevation: 5
    }
  : shadowStyle.buttonStyle;

export const container = {
  flex: 1,
  backgroundColor: colors.theme.light.primaryBackground
};

export const divider = {
  margin: 16,
  borderWidth: 1,
  borderRadius: 20,
  borderBottomWidth: 1,
  color: colors.theme.light.dividerColor,
  borderColor: colors.theme.light.dividerColor
};

export default {
  flex: {
    flex: 1
  },
  flexRow: {
    flexDirection: "row"
  },
  resizeModeCover: {
    resizeMode: "cover"
  },
  center: {
    alignSelf: "center",
    alignContent: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  marker: {
    width: 25,
    height: 30
  },
  poimarker: {
    width: 35,
    height: 30
  },
  custommarker: {
    width: 55,
    height: 60
  },
  car: {
    width: 52,
    height: 60
  }
};
