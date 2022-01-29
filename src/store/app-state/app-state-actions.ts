import { changeBaseURL } from "../../services/axios"


export const toggleTheme = () => ({
    type: "TOGGLE_THEME",
    payload: null
})


export const switchCurrentNamespace = (namespace: string) => ({
    type: "SWITCH_CURRENT_NAMESPACE",
    payload: namespace
})


export const initAppRequest = () => {
    return async (dispatch) => {
        // get information from localStorage
        const currentAPIAddress = "127.0.0.1:8001"
        changeBaseURL(currentAPIAddress)
        dispatch(initAppSuccess())
    }
}


export const initAppSuccess = () => ({
    type: "INIT_APP_SUCCESS",
    payload: null
})
