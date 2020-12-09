import * as React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _container } from "./Card.style";
import TextContainer from "./components/TextContainer/TextContainer";
import IconContainer from "./components/IconContainer/IconContainer";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface ICardProps {
  style?: CustomStyleProp;
  onPress?: () => void;
  iconDisable?: boolean;
  borderRadius?: number;
  topRightText?: string;
  backgroundColor?: string;
  bottomRightText?: string;
  containerHeight?: number;
  topRightComponent?: JSX.Element;
  bottomRightComponent?: JSX.Element;
  shadowStyle?: CustomStyleProp;
  topRightTextStyle?: CustomTextStyleProp;
  bottomRightTextStyle?: CustomTextStyleProp;
}

const Card: React.FC<ICardProps> = ({
  style,
  onPress,
  shadowStyle,
  topRightText,
  bottomRightText,
  topRightTextStyle,
  topRightComponent,
  bottomRightTextStyle,
  bottomRightComponent,
  borderRadius = 15,
  iconDisable = false,
  backgroundColor = "#fff",
  containerHeight = undefined,
  ...rest
}) => {
  const renderTopRightComponent = () =>
    topRightComponent || (
      <View style={styles.topRightContainer}>
        <Text style={[styles.topRightTextStyle, topRightTextStyle]}>
          {topRightText}
        </Text>
      </View>
    );

  const renderBottomRightComponent = () =>
    bottomRightComponent || (
      <View style={styles.bottomRightContainer}>
        <Text style={[styles.bottomRightTextStyle, bottomRightTextStyle]}>
          {bottomRightText}
        </Text>
      </View>
    );

  return (
    <View style={[styles.shadowStyle, shadowStyle]}>
      <RNBounceable
        {...rest}
        style={[
          _container(
            containerHeight,
            iconDisable,
            borderRadius,
            backgroundColor,
          ),
          style,
        ]}
        onPress={onPress}
      >
        <View style={styles.contentContainer}>
          <IconContainer {...rest} />
          <TextContainer {...rest} />
          {renderTopRightComponent()}
          {renderBottomRightComponent()}
        </View>
      </RNBounceable>
    </View>
  );
};

export default Card;
