import { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { functionsTypes } from "..";

export type TButtonProps = FC<{
  title: string;
  type?: "primary-small" | "no-border" | "primary";
  iconPosition?: "right" | "left";
  onPress: functionsTypes.TFunctionType;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}>;

export type TBackButtonProps = FC<{
  onPress: functionsTypes.TFunctionType;
  style?: StyleProp<ViewStyle>;
}>;
