/**
 * function checkFillProp checks color
 * returns #000 if undefined
 * */

import { colors } from "../constants";
import { iconsTypes } from "../types";

export default function checkFillProp(color: iconsTypes.TIconColor) {
  return typeof color !== "undefined" ? color : colors.WHITE;
}
