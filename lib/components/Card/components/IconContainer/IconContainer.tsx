import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { Entypo } from "@expo/vector-icons";

/**
 * ? Local Imports
 */
import styles, { iconCircle } from "./IconContainer.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IIconContainerProps {
  IconType?: any;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  iconDisable?: boolean;
  iconBackgroundColor?: string;
  iconStyle?: CustomStyleProp;
  iconComponent?: React.ReactChild;
}

const IconContainer: React.FC<IIconContainerProps> = ({
  iconStyle,
  iconName = "home",
  IconType = Entypo,
  iconSize = 26,
  iconColor = "#fff",
  iconDisable = false,
  iconComponent,
  iconBackgroundColor = "#fcdab5",
}) => {
  if (iconDisable) return null;
  return (
    <View style={[styles.iconContainer, iconStyle]}>
      <View style={iconCircle(iconDisable, iconBackgroundColor)}>
        <View style={[styles.iconStyle]}>
          {iconComponent || (
            <IconType name={iconName} size={iconSize} color={iconColor} />
          )}
        </View>
      </View>
    </View>
  );
};

export default IconContainer;
