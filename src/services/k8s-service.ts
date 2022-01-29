import { apiInstance } from "./axios"

export const fetchPods = async (query: string) => {
    const pods = await apiInstance.get("/api/v1/namespaces/my-namespace/pods")
    
}