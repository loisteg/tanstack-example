import { FieldRenderProps } from "react-final-form";
import { StyleProp, ViewStyle } from "react-native";
import { functionsTypes } from "..";

type ReturnKey =
  | "done"
  | "go"
  | "next"
  | "search"
  | "send"
  | "none"
  | "previous"
  | "default"
  | "join"
  | "route"
  | "yahoo";
type KeyboardType =
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "email-address"
  | "phone-pad"
  | "url"
  | "ascii-capable"
  | "numbers-and-punctuation"
  | "name-phone-pad"
  | "twitter"
  | "web-search"
  | "visible-password";
type AutoCapitalize = "characters" | "words" | "sentences" | "none";
type Input =
  | "default"
  | "password"
  | "order"
  | "image"
  | "calendar"
  | "time"
  | "dropdown"
  | "select"
  | "terms";

interface BaseInputProps {
  returnKeyType: ReturnKey;
  placeholder: string | undefined;
  extraContainerStyle: StyleProp<ViewStyle>;
  errorMessage: string;
  autoCapitalize: AutoCapitalize;
  autoCorrect: boolean;
  onTextChangeCustom: functionsTypes.FunctionType;
  clearError: functionsTypes.DefaultFunctionType;
  keyboardType: KeyboardType;
  disabled: boolean;
  ignoreTouchStatus: boolean;
  multiline: boolean;
}
export interface DefaultInputProps
  extends Partial<BaseInputProps>,
    FieldRenderProps<string | undefined, any> {}
export interface PasswordInputProps extends DefaultInputProps {
  onTextChangeCustom: functionsTypes.DefaultFunctionType;
  secureTextEntry?: boolean | undefined;
}

export interface FieldType {
  inputType?: Input;
  label?: string;
}

export type PossibleInputProps = DefaultInputProps | PasswordInputProps;

export type FieldProps = FieldType & PossibleInputProps;
