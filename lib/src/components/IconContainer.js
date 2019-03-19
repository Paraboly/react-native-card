import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
// Styles
import styles from "../styles/Card.style";
import sharedStyle, { defaultShadowStyle } from "../styles/shared.style";
import colors from "../styles/colors.style";

const IconContainer = props => {
  const {
    iconName,
    iconType,
    iconSize,
    iconColor,
    iconDisable,
    iconComponent,
    iconBackgroundColor
  } = props;
  if (iconDisable) return null;
  return (
    <View style={styles.iconContainer}>
      <View
        style={[
          {
            backgroundColor: iconBackgroundColor || "#fcdab5",
            display: iconDisable ? "none" : "flex"
          },
          styles.iconCircle
        ]}
      >
        <View
          style={[styles.iconStyle, sharedStyle.center, defaultShadowStyle]}
        >
          {iconComponent || (
            <Icon
              name={iconName || "home"}
              type={iconType || "Entypo"}
              size={iconSize || 26}
              color={iconColor || colors.theme.light.white}
            />
          )}
        </View>
      </View>
    </View>
  );
};

IconContainer.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  iconDisable: PropTypes.bool,
  iconBackgroundColor: PropTypes.string
};

IconContainer.defaultProps = {
  iconName: "home",
  iconType: "Entypo",
  iconSize: 25,
  iconColor: "#fff",
  iconDisable: false,
  iconBackgroundColor: null
};

export default IconContainer;
