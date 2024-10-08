import { getDataAction } from "../axios";

import * as asyncStorage from "./asyncStorage";
import { storageKeys, urls } from "../constants";

import { tokensTypes } from "../types";

const getAccessToken = async () => {
  const token = await asyncStorage.getItem(storageKeys.ACCESS_TOKEN);
  return token;
};

const setAccessTokens = async (tokens: tokensTypes.TokensResponse) => {
  await asyncStorage.multiSet([
    [storageKeys.ACCESS_TOKEN, tokens.access_token],
    [storageKeys.ACCESS_TOKEN_EXPIRATION, `${tokens.access_token_expiration}`],
    [storageKeys.REFRESH_TOKEN, tokens.refresh_token],
    [
      storageKeys.REFRESH_TOKEN_EXPIRATION,
      `${tokens.refresh_token_expiration}`,
    ],
  ]);
};

const getRefreshToken = async () => {
  const token = await asyncStorage.getItem(storageKeys.REFRESH_TOKEN);
  return token;
};

const refreshToken = async () => {
  const currentToken = await getRefreshToken();

  if (!currentToken) return "";

  try {
    const response = await getDataAction(
      "https://khudenko41.bld.spl.co.ua/api/2.0/admin/auth/tokens/" +
        currentToken,
      null
    );
    if (response.data) {
      await setAccessTokens(response.data);
      return await getAccessToken();
    }
    return "";
  } catch (err) {
    return "";
  }
};

export { getAccessToken, setAccessTokens, refreshToken };
