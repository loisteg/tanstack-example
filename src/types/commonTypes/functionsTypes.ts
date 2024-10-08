import { Dispatch, SetStateAction } from "react";

export type DefaultFunctionType = () => void;
export type FunctionWithArgumentsType<T> = (args: T) => void;
export type StateFunctionType<T> = Dispatch<SetStateAction<T>>;
export type FunctionType<T = any> = T extends undefined
  ? DefaultFunctionType
  : StateFunctionType<T>;
