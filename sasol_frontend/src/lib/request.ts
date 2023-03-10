import Axios, { AxiosError, AxiosInstance } from "axios";
import env from "ts-react-dotenv";

const http: AxiosInstance = Axios.create({
  baseURL: env?.API_BASE_URL || "http://127.0.0.1:8000/api",
});

http.interceptors.response.use(undefined, (err) => {
  const expectedError: AxiosError =
    err.response && err.response.status >= 400 && err.response.status < 500;
  if (expectedError) {
    console.error("SOMETHING UNEXPECTED HAPPENED");
  }
  return Promise.reject(err);
});

export default http;
