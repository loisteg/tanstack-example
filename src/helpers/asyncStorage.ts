import AsyncStorage from "@react-native-async-storage/async-storage";

import { Callback } from "@react-native-async-storage/async-storage/lib/typescript/types";

export const getItem = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

export const setItem = async (
  key: string,
  value: string,
  callback?: Callback | undefined
) => {
  return await AsyncStorage.setItem(key, value, callback);
};

export const multiSet = async (data: Array<[string, string]>) => {
  return await AsyncStorage.multiSet(data);
};

export const storage = AsyncStorage;
