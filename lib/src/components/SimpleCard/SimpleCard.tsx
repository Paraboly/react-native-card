import * as React from "react";
import Androw from "react-native-androw";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles, { _containerGlue } from "./SimpleCard.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface ISimpleCardProps {
  backgroundColor?: string;
  style?: CustomStyleProp;
  shadowStyle?: CustomStyleProp;
  innerContainerStyle?: CustomStyleProp;
  cardTitleTextStyle?: CustomTextStyleProp;
  title: string;
  onPress: () => void;
}

const SimpleCard: React.FC<ISimpleCardProps> = ({
  title,
  style,
  onPress,
  innerContainerStyle,
  shadowStyle,
  cardTitleTextStyle,
  backgroundColor = "#fff",
  ...rest
}) => {
  return (
    <RNBounceable onPress={onPress} style={[styles.container, style]} {...rest}>
      <Androw style={[styles.shadowStyle, shadowStyle]}>
        <View style={[_containerGlue(backgroundColor), innerContainerStyle]}>
          <Text style={[styles.cardTitleTextStyle, cardTitleTextStyle]}>
            {title}
          </Text>
        </View>
      </Androw>
    </RNBounceable>
  );
};

export default SimpleCard;
