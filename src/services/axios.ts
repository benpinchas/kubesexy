import axios from "axios";

export const apiInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 10000,
    // headers: {'X-Host-Override': '127.0.0.1:8001'}
});

export const changeBaseURL = (baseURL: string) => {
    apiInstance.defaults.baseURL = baseURL
    console.log("Changed bsaeurl to:", apiInstance.defaults.baseURL);
}