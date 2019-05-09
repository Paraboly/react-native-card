import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import colors from "../../shared/colors.style";
import Icon from "react-native-dynamic-vector-icons";
import styles, { iconCircle } from "../styles/IconContainer";
import sharedStyle, { defaultShadowStyle } from "../../shared/shared.style";

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
      <View style={iconCircle(iconDisable, iconBackgroundColor)}>
        <View
          style={[styles.iconStyle, sharedStyle.center, defaultShadowStyle]}
        >
          {iconComponent || (
            <Icon
              name={iconName}
              type={iconType}
              size={iconSize}
              color={iconColor}
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
  iconSize: 26,
  iconName: "home",
  iconType: "Entypo",
  iconDisable: false,
  iconBackgroundColor: "#fcdab5",
  iconColor: colors.theme.light.white
};

export default IconContainer;
