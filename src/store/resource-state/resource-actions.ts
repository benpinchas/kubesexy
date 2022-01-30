import { fetchDeployments, fetchPods } from "../../services/k8s-service"
import { currentNamespaceSelector } from "../namespace-state/namespace-selectors"
import { currentResourceSelector } from "./resource-selectors"

export const switchCurrentResource = (identifier: string) => ({
    type: "SWITCH_CURRENT_RESOURCE",
    payload: identifier // "POD" | "DEPLOYMENT" | ..
})

export const fetchItemsRequest = (query?: string) => {
    return async (dispatch, getState) => {
        const state = getState()
        const currentNamespace = currentNamespaceSelector(state)
        const selectedResource = currentResourceSelector(state)
        let items = [];
        if (selectedResource === "POD") {
            items = await fetchPods(currentNamespace)
        } else if (selectedResource === "DEPLOYMENT") {
            items = await fetchDeployments(currentNamespace)
        }
        dispatch(fetchItemsSuccess(items))
    }
}



export const fetchItemsSuccess = (items) => {
    return {
        type: "FETCH_ITEMS_SUCCESS",
        payload: items
    }
}