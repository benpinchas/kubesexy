export const fetchPodsRequest = (query?: string) => ({
    type: "FETCH_PODS_REQUEST",
    payload: query,
})