import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles, { descStyle } from "../styles/Card.style";
import colors from "../styles/colors.style";

const TextContainer = props => {
  const {
    title,
    content,
    iconDisable,
    defaultTitle,
    numberOfLines,
    defaultContent,
    contentTextColor
  } = props;
  return (
    <View>
      <View
        style={{
          flexDirection: "column",
          left: iconDisable ? 0 : 48
        }}
      >
        <Text style={styles.titleStyle}>{title || defaultTitle || ""}</Text>
        <Text
          numberOfLines={numberOfLines || 3}
          style={descStyle(iconDisable, contentTextColor)}
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
  iconDisable: true,
  defaultTitle: "",
  numberOfLines: 3,
  defaultContent: "",
  contentTextColor: colors.theme.light.primaryGrey
};

export default TextContainer;
