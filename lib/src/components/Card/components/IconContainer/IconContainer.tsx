import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import Androw from "react-native-androw";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import styles, { iconCircle } from "./IconContainer.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IIconContainerProps {
  iconStyle?: CustomStyleProp;
  iconName?: string;
  iconType?: string;
  iconSize?: number;
  iconColor?: string;
  iconDisable?: boolean;
  iconComponent?: React.ReactChild;
  iconBackgroundColor?: string;
}

const IconContainer: React.FC<IIconContainerProps> = ({
  iconStyle,
  iconName = "home",
  iconType = "Entypo",
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
        <Androw style={styles.shadowStyle}>
          <View style={[styles.iconStyle]}>
            {iconComponent || (
              <Icon
                name={iconName}
                type={iconType}
                size={iconSize}
                color={iconColor}
              />
            )}
          </View>
        </Androw>
      </View>
    </View>
  );
};

export default IconContainer;