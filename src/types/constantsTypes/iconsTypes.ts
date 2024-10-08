import ICONS from "../../icons";

import { StyleProp, ViewStyle, ColorValue } from "react-native";
import { functionsTypes } from "..";

export type TIconColor = ColorValue | undefined;
export type TIconName = keyof typeof ICONS;

export interface IIconProps {
  fill?: TIconColor;
}
export interface IIconBoxProps extends IIconProps {
  name: TIconName;
  style?: StyleProp<ViewStyle>;
}
export interface IIconButtonProps extends IIconBoxProps {
  onPress: functionsTypes.FunctionType;
  disabled?: boolean;
}
