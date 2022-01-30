import { apiInstance } from "./axios"

export const fetchPods = async (ns: string) => {
    console.log("Fetching PODS for", ns);
    const res = await apiInstance.get(`/api/v1/namespaces/${ns}/pods`)
    
    return res.data.items
}

export const fetchDeployments = async (ns: string) => {
    console.log("Fetching DEPLS for", ns);
    const res = await apiInstance.get(`/apis/apps/v1/namespaces/${ns}/deployments`)
    
    return res.data.items
}

export const fetchNamespaces = async () => {
    console.log("Fetching NAMESPACES");
    const res = await apiInstance.get(`/api/v1/namespaces`)

    return res.data.items.map(ns => ns.metadata.name)
}