import React from "react";
import PropTypes from "prop-types";
import Ripple from "react-native-material-ripple";
import { Text, View } from "react-native";
import TextContainer from "./components/TextContainer";
import IconContainer from "./components/IconContainer";
// Styles
import styles, { container, _shadowStyle } from "./styles/Card.style";
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
    rightTopText,
    defaultTitle,
    numberOfLines,
    defaultContent,
    rightBottomText,
    containerHeight,
    iconBackgroundColor
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
              numberOfLines={numberOfLines}
              defaultContent={defaultContent}
            />
            <View style={styles.topRightContainer}>
              <Text style={styles.topRightTextStyle}>{rightTopText}</Text>
            </View>
            <View style={styles.bottomRightContainer}>
              <Text style={styles.bottomRightTextStyle}>{rightBottomText}</Text>
            </View>
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
  numberOfLines: PropTypes.number,
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
  numberOfLines: 3,
  defaultContent: "",
  rightBottomText: "",
  containerHeight: null,
  iconBackgroundColor: "pink"
};

export default Card;
