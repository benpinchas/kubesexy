import { fetchNamespaces } from "../../services/k8s-service"
import { fetchItemsRequest } from "../resource-state/resource-actions"

export const switchCurrentNamespace = (namespace: string) => {
    return async (dispatch) => {
        dispatch({
            type: "SWITCH_CURRENT_NAMESPACE",
            payload: namespace
        })

        dispatch(fetchItemsRequest())
    }
}

export const fetchNamespacesRequest = () => {
    return async (dispatch) => {
        const namespaces = await fetchNamespaces()

        dispatch(fetchNamespacesSuccess(namespaces))
    }
}

export const fetchNamespacesSuccess = (namespaces) => ({
    type: "FETCH_NAMESPACES_SUCCESS",
    payload: namespaces
})