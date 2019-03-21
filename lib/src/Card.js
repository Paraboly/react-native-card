import React from "react";
import PropTypes from "prop-types";
import Ripple from "react-native-material-ripple";
import { Text, View } from "react-native";
import TextContainer from "./components/TextContainer";
import IconContainer from "./components/IconContainer";
// Styles
import styles, {
  container,
  _shadowStyle,
  topRightTextStyle,
  bottomRightTextStyle
} from "./styles/Card.style";
import colors from "./styles/colors.style";

const Card = props => {
  const {
    title,
    style,
    onPress,
    content,
    iconName,
    iconSize,
    iconType,
    iconColor,
    titleStyle,
    iconDisable,
    shadowStyle,
    contentStyle,
    topRightText,
    defaultTitle,
    topRightColor,
    iconComponent,
    topRightStyle,
    defaultContent,
    bottomRightText,
    containerHeight,
    bottomRightStyle,
    bottomRightColor,
    topRightFontSize,
    topRightComponent,
    bottomRightFontSize,
    iconBackgroundColor,
    bottomRightComponent,
    borderRadius
  } = props;
  return (
    <View
      style={[
        shadowStyle || _shadowStyle,
        container(containerHeight, iconDisable, borderRadius),
        style
      ]}
    >
      <Ripple
        rippleContainerBorderRadius={borderRadius}
        rippleColor={colors.theme.light.primary}
        onPress={onPress}
      >
        <View style={styles.contentContainer}>
          <IconContainer
            iconName={iconName}
            iconType={iconType}
            iconSize={iconSize}
            iconColor={iconColor}
            iconDisable={iconDisable}
            iconComponent={iconComponent}
            iconBackgroundColor={iconBackgroundColor}
          />
          <TextContainer
            title={title}
            content={content}
            titleStyle={titleStyle}
            contentStyle={contentStyle}
            iconDisable={iconDisable}
            defaultTitle={defaultTitle}
            defaultContent={defaultContent}
          />
          {topRightComponent || (
            <View style={styles.topRightContainer}>
              <Text
                style={
                  topRightStyle ||
                  topRightTextStyle(topRightFontSize, topRightColor)
                }
              >
                {topRightText}
              </Text>
            </View>
          )}
          {bottomRightComponent || (
            <View style={styles.bottomRightContainer}>
              <Text
                style={
                  bottomRightStyle ||
                  bottomRightTextStyle(bottomRightFontSize, bottomRightColor)
                }
              >
                {bottomRightText}
              </Text>
            </View>
          )}
        </View>
      </Ripple>
    </View>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
  content: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  iconType: PropTypes.string,
  iconDisable: PropTypes.bool,
  shadowStyle: PropTypes.object,
  rightTopText: PropTypes.string,
  defaultTitle: PropTypes.string,
  defaultContent: PropTypes.string,
  rightBottomText: PropTypes.string,
  containerHeight: PropTypes.number,
  iconBackgroundColor: PropTypes.string,
  borderRadius: PropTypes.number
};

Card.defaultProps = {
  title: "",
  style: null,
  onPress: () => {},
  content: "",
  iconName: "home",
  iconColor: "#fff",
  iconSize: 26,
  iconType: "Entypo",
  iconDisable: false,
  shadowStyle: _shadowStyle,
  rightTopText: "",
  defaultTitle: "",
  defaultContent: "",
  rightBottomText: "",
  containerHeight: null,
  iconBackgroundColor: "pink",
  borderRadius: 15
};

export default Card;
