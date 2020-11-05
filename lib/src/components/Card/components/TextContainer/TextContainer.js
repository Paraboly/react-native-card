import React from "react";
import { Text, View } from "react-native";
import { container, _titleStyle, _contentStyle } from "./TextContainer.style";

const TextContainer = (props) => {
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
    textContainerNumberOfLines,
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
              contextFontFamily,
            )
          }
        >
          {content || defaultContent || ""}
        </Text>
      </View>
    </View>
  );
};

TextContainer.defaultProps = {
  content: "",
  defaultTitle: "",
  numberOfLines: 3,
  titleFontSize: 18,
  iconDisable: false,
  contextFontSize: 14,
  textContainerNumberOfLines: null,
  titleColor: "#505e80",
  contentTextColor: "#959aa8",
};

export default TextContainer;
