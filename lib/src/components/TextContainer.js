import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "../styles/Card.style";

const TextContainer = props => {
  const {
    title,
    content,
    iconDisable,
    defaultTitle,
    numberOfLines,
    defaultContent
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
        <Text numberOfLines={numberOfLines || 3} style={styles.descStyle}>
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
  defaultContent: PropTypes.string
};

TextContainer.defaultProps = {
  title: "",
  content: "",
  iconDisable: true,
  defaultTitle: "",
  numberOfLines: 3,
  defaultContent: ""
};

export default TextContainer;
