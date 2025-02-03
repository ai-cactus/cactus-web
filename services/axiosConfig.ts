import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import config from "./config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const baseURL = config.baseUrl;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

const onRequest = async (
  request: AxiosRequestConfig
): Promise<InternalAxiosRequestConfig<any>> => {
  if (!request.headers) return request as InternalAxiosRequestConfig<any>;
  const session = "";

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //@ts-ignore
      request.headers.Authorization = `Bearer ${user.accessToken}`;
    } else {
      console.log("No user is logged in");
    }
  });

  return request as InternalAxiosRequestConfig<any>;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  return await Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data ?? response;
};

const onResponseError = async (error: AxiosError) => {
  return await Promise.reject(error?.response?.data || error.message);
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
