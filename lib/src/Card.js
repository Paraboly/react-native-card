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
    defaultTitle,
    numberOfLines,
    defaultContent,
    rightBottomText,
    containerHeight,
    iconBackgroundColor
  } = props;
  return (
    <View style={shadowStyle}>
      <View
        style={[
          shadowStyle || _shadowStyle,
          style || container(containerHeight, iconDisable)
        ]}
      >
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
            <View style={styles.destinationContainer}>
              <Text style={styles.destinationTextStyle}>{rightBottomText}</Text>
            </View>
          </View>
        </Ripple>
      </View>
    </View>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  iconDisable: PropTypes.bool,
  defaultTitle: PropTypes.string,
  numberOfLines: PropTypes.number,
  defaultContent: PropTypes.string
};

Card.defaultProps = {
  title: "",
  content: "",
  iconDisable: true,
  defaultTitle: "",
  numberOfLines: 3,
  defaultContent: "",
  onPress: () => {}
};

export default Card;
