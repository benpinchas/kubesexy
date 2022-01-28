export const fetchPodsRequest = (query?: string) => {
    return async (dispatch) => {
        // Initial action dispatched
        dispatch({ type: "FETCH_PODS_REQUEST" });

        // async logic
        const pods = await [{}, {}]

        dispatch(fetchPodSuccess(pods));
    }
}

export const fetchPodSuccess = (pods) => {
    return {
        type: "FETCH_PODS_SUCCESS",
        payload: pods
    }
}