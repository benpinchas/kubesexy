import { apiInstance } from "./axios"

export const fetchPods = async (query?: string) => {
    console.log(apiInstance.defaults.baseURL);
    const res = await apiInstance.get("/api/v1/namespaces/my-namespace/pods")
    console.log({res});
    
    return res.data.items
}

export const fetchDeployments = async (query?: string) => {
    console.log(apiInstance.defaults.baseURL);
    const res = await apiInstance.get("/apis/apps/v1/deployments")
    console.log({res});
    
    return res.data.items
}