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
  bottomRightTextStyle,
  topRightTextStyle
} from "./styles/Card.style";
import colors from "./styles/colors.style";

const Card = props => {
  const {
    title,
    style,
    onPress,
    content,
    iconName,
    iconColor,
    iconSize,
    iconType,
    iconDisable,
    shadowStyle,
    topRightText,
    defaultTitle,
    topRightColor,
    defaultContent,
    bottomRightText,
    containerHeight,
    bottomRightColor,
    topRightFontSize,
    topRightComponent,
    bottomRightFontSize,
    iconBackgroundColor,
    bottomRightComponent
  } = props;
  return (
    <View style={shadowStyle || _shadowStyle}>
      <View style={[style || container(containerHeight, iconDisable)]}>
        <Ripple
          rippleContainerBorderRadius={15}
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
              iconBackgroundColor={iconBackgroundColor}
            />
            <TextContainer
              title={title}
              content={content}
              iconDisable={iconDisable}
              defaultTitle={defaultTitle}
              defaultContent={defaultContent}
            />
            {topRightComponent || (
              <View style={styles.topRightContainer}>
                <Text
                  style={topRightTextStyle(topRightFontSize, topRightColor)}
                >
                  {topRightText}
                </Text>
              </View>
            )}
            {bottomRightComponent || (
              <View style={styles.bottomRightContainer}>
                <Text
                  style={bottomRightTextStyle(
                    bottomRightFontSize,
                    bottomRightColor
                  )}
                >
                  {bottomRightText}
                </Text>
              </View>
            )}
          </View>
        </Ripple>
      </View>
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
  iconBackgroundColor: PropTypes.string
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
  iconBackgroundColor: "pink"
};

export default Card;
