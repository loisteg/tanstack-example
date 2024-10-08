import { FC } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { functionsTypes, iconsTypes } from "..";

export type DefaultCustomTab = FC<{
  iconName: iconsTypes.TIconName;
  isActive: boolean;
  onPress: functionsTypes.FunctionType;
}>;

export type CustomTabBarProps = BottomTabBarProps;
