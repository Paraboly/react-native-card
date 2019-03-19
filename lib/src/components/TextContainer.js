import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles, { _contentStyle } from "../styles/Card.style";
import colors from "../styles/colors.style";

const TextContainer = props => {
  const {
    title,
    content,
    titleStyle,
    iconDisable,
    contentStyle,
    defaultTitle,
    defaultContent,
    contentTextColor
  } = props;
  return (
    <View>
      <View
        style={{
          height: 65,
          flexDirection: "column",
          left: iconDisable ? 0 : 48
        }}
      >
        <Text style={titleStyle || styles.titleStyle}>
          {title || defaultTitle || ""}
        </Text>
        <Text
          style={contentStyle || _contentStyle(iconDisable, contentTextColor)}
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
  numberOfLines: PropTypes.number,
  defaultContent: PropTypes.string,
  contentTextColor: PropTypes.string
};

TextContainer.defaultProps = {
  title: "",
  content: "",
  iconDisable: false,
  defaultTitle: "",
  numberOfLines: 3,
  defaultContent: "",
  contentTextColor: colors.theme.light.primaryGrey
};

export default TextContainer;
