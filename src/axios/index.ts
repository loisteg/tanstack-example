import { tokenActions } from "../helpers";

import axios from "axios";

import { AxiosError } from "axios";
import { RequestType } from "../types/commonTypes/requestsTypes";

const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await tokenActions.getAccessToken();
    if (token) {
      config.headers.Authorization = `Splynx-EA (access_token=${token});`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.errors && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await tokenActions.refreshToken();
        axiosInstance.defaults.headers.common["Authorization"] = newToken;
        originalRequest.headers["Authorization"] = newToken;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

const axiosBaseQuery =
  () =>
  async ({
    url,
    method,
    data,
    params,
    headers,
  }: {
    url: string;
    method: RequestType;
    data?: any;
    params?: any;
    headers?: any;
  }) => {
    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

async function dataAction(
  method: RequestType,
  url: string,
  data: any = null,
  headers: any = {},
  params: any
) {
  const options = {
    method,
    url,
    data:
      method === RequestType.PUT ||
      method === RequestType.POST ||
      method === RequestType.PATCH
        ? data
        : null,
    headers,
    params,
  };
  return await axiosInstance(options)
}

const getDataAction = (
  url: string,
  data: any = null,
  headers: any = {},
  params: any = undefined
) => {
  return dataAction(RequestType.GET, url, data, headers, params);
};

const postDataAction = (
  url: string,
  data: any = null,
  headers: any = {},
  params: any = undefined
) => {
  return dataAction(RequestType.POST, url, data, headers, params);
};

const putDataAction = (
  url: string,
  data: any = null,
  headers: any = {},
  params: any = undefined
) => {
  return dataAction(RequestType.PUT, url, data, headers, params);
};

const deleteDataAction = (
  url: string,
  data: any = null,
  headers: any = {},
  params: any = undefined
) => {
  return dataAction(RequestType.DELETE, url, data, headers, params);
};

const changeAxiosBaseUrl = (string: string) => {
  axiosInstance.interceptors.request.use((config) => {
    config.baseURL = string;
    return config;
  });
};

const setAxiosBaseUrl = (url: string) => changeAxiosBaseUrl(url);

const clearAxiosBaseUrl = () => changeAxiosBaseUrl("");

export {
  axiosBaseQuery,
  getDataAction,
  postDataAction,
  putDataAction,
  deleteDataAction,
  setAxiosBaseUrl,
  clearAxiosBaseUrl,
};
