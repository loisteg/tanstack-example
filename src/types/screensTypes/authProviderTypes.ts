import { PropsWithChildren } from "react";
import { functionsTypes } from "..";

export type AuthProviderProps = PropsWithChildren<{}>;
export type AuthContext = {
  onLogin: functionsTypes.FunctionType;
  onLogout: functionsTypes.FunctionType;
  onClearBaseUrl: functionsTypes.FunctionType;
  onSetBaseUrl: functionsTypes.FunctionType;
};
