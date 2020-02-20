import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import colors from "../../shared/colors.style";
import {
  container,
  _titleStyle,
  _contentStyle
} from "../styles/TextContainer.style";

const TextContainer = props => {
  const {
    title,
    content,
    titleStyle,
    titleColor,
    iconDisable,
    contentStyle,
    defaultTitle,
    titleFontSize,
    defaultContent,
    titleFontFamily,
    contextFontSize,
    contentTextColor,
    contextFontFamily,
    textContainerNumberOfLines
  } = props;
  return (
    <View>
      <View style={container(iconDisable)}>
        <Text
          style={
            titleStyle ||
            _titleStyle(titleColor, titleFontSize, titleFontFamily)
          }
        >
          {title || defaultTitle || ""}
        </Text>
        <Text
          numberOfLines={textContainerNumberOfLines}
          style={
            contentStyle ||
            _contentStyle(
              iconDisable,
              contentTextColor,
              contextFontSize,
              contextFontFamily
            )
          }
        >
          {content || defaultContent || ""}
        </Text>
      </View>
    </View>
  );
};

TextContainer.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  iconDisable: PropTypes.bool,
  defaultTitle: PropTypes.string,
  titleFontSize: PropTypes.number,
  numberOfLines: PropTypes.number,
  defaultContent: PropTypes.string,
  contentTextColor: PropTypes.string,
  textContainerNumberOfLines: PropTypes.number
};

TextContainer.defaultProps = {
  content: "",
  defaultTitle: "",
  numberOfLines: 3,
  titleFontSize: 18,
  iconDisable: false,
  contextFontSize: 14,
  textContainerNumberOfLines: null,
  titleColor: colors.theme.light.primaryDark,
  contentTextColor: colors.theme.light.primaryGrey
};

export default TextContainer;
