import React from "react";
import PropTypes from "prop-types";
import Ripple from "react-native-material-ripple";
import { Text, View } from "react-native";
import _styles, {
  containerGlue,
  cardTitleStyle
} from "./styles/SimpleCard.style";
import colors from "../shared/colors.style";

const SimpleCard = props => {
  const {
    title,
    styles,
    onPress,
    rippleColor,
    titleFontSize,
    titleTextColor,
    backgroundColor,
    titleFontFamily,
    innerContainerStyle,
    rippleContainerBorderRadius
  } = props;
  return (
    <Ripple
      onPress={onPress}
      rippleColor={rippleColor}
      style={styles || _styles.container}
      rippleContainerBorderRadius={rippleContainerBorderRadius}
    >
      <View
        style={[
          innerContainerStyle || containerGlue(backgroundColor),
          _styles.shadowStyle
        ]}
      >
        <Text
          style={cardTitleStyle(titleFontSize, titleTextColor, titleFontFamily)}
        >
          {title}
        </Text>
      </View>
    </Ripple>
  );
};

SimpleCard.propTypes = {
  title: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleTextColor: PropTypes.string
};

SimpleCard.defaultProps = {
  title: "",
  titleFontSize: 14,
  backgroundColor: "white",
  rippleContainerBorderRadius: 12,
  rippleColor: colors.theme.light.primary,
  titleTextColor: colors.theme.light.primaryDark
};

export default SimpleCard;
