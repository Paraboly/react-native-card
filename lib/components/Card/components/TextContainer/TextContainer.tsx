import * as React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles, {
  _container,
  _descriptionTextStyle,
} from "./TextContainer.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface ITextContainerProps {
  title?: string;
  description?: string;
  iconDisable?: boolean;
  descriptionNumberOfLines?: number;
  textContainerStyle?: CustomStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  descriptionTextStyle?: CustomTextStyleProp;
}

const TextContainer: React.FC<ITextContainerProps> = ({
  title,
  description,
  titleTextStyle,
  textContainerStyle,
  iconDisable = false,
  descriptionTextStyle,
  descriptionNumberOfLines = 3,
}) => {
  return (
    <View style={[_container(iconDisable), textContainerStyle]}>
      <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
      <Text
        numberOfLines={descriptionNumberOfLines}
        style={[_descriptionTextStyle(iconDisable), descriptionTextStyle]}
      >
        {description}
      </Text>
    </View>
  );
};

export default TextContainer;
