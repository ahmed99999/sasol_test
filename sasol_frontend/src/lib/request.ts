import Axios, { AxiosError, AxiosInstance } from "axios";
import config from '../../config.json'

const http: AxiosInstance = Axios.create({
    baseURL: config.API_BASE_URL,
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
