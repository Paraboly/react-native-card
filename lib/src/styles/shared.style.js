import { Platform } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import colors from "./colors.style";

const fontFamilyName = "Metropolis-Regular";
export const isAndroid = Platform.OS === "android";

export const ifIPhoneXHeader = {
  ...ifIphoneX(
    {
      marginTop: 44
    },
    {
      marginTop: 16
    }
  )
};

export const shadowStyle = {
  buttonStyle: {
    shadowColor: colors.theme.light.shadowColor,
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  topStyle: {
    shadowColor: colors.theme.light.shadowColor,
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.3,
    shadowRadius: 10
  }
};

export const defaultShadowStyle = isAndroid
  ? {
      elevation: 5
    }
  : shadowStyle.buttonStyle;

export const fontSizes = {
  h1: {
    fontSize: 58,
    lineHeight: 80,
    fontFamily: fontFamilyName
  },
  h2: {
    fontSize: 46,
    lineHeight: 64,
    fontFamily: fontFamilyName
  },
  h4: {
    fontSize: 20,
    lineHeight: 34,
    fontFamily: fontFamilyName
  },
  h5: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fontFamilyName
  }
};

export const container = {
  flex: 1,
  backgroundColor: colors.theme.light.primaryBackground
};

export const divider = {
  margin: 16,
  borderBottomWidth: 1,
  borderWidth: 1,
  borderColor: colors.theme.light.dividerColor,
  color: colors.theme.light.dividerColor,
  borderRadius: 20
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
    height: 30,
    width: 25
  },
  poimarker: {
    height: 30,
    width: 35
  },
  custommarker: {
    height: 60,
    width: 55
  },
  car: {
    height: 60,
    width: 52
  }
};
