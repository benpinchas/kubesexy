import axios from "axios";

export const apiInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export const changeBaseURL = (baseURL: string) => {
    apiInstance.defaults.baseURL = baseURL
}