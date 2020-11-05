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
  text: string;
  backgroundColor?: string;
  style?: CustomStyleProp;
  shadowStyle?: CustomStyleProp;
  innerContainerStyle?: CustomStyleProp;
  cardTextStyle?: CustomTextStyleProp;
  onPress?: () => void;
}

const SimpleCard: React.FC<ISimpleCardProps> = ({
  text,
  style,
  onPress,
  shadowStyle,
  cardTextStyle,
  innerContainerStyle,
  backgroundColor = "#fff",
  ...rest
}) => {
  return (
    <RNBounceable onPress={onPress} style={[styles.container, style]} {...rest}>
      <Androw style={[styles.shadowStyle, shadowStyle]}>
        <View style={[_containerGlue(backgroundColor), innerContainerStyle]}>
          <Text style={[styles.cardTextStyle, cardTextStyle]}>{text}</Text>
        </View>
      </Androw>
    </RNBounceable>
  );
};

export default SimpleCard;
