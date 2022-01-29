import { currentResourceSelector } from "./resource-selectors"

export const switchCurrentResource = (identifier: string) => ({
    type: "SWITCH_CURRENT_RESOURCE",
    payload: identifier // "POD" | "DEPLOYMENT" | ..
})

export const fetchItemsRequest = (query?: string) => {
    return async (dispatch, getState) => {
        const selectedResource = currentResourceSelector(getState())
        let items = [];
        if (selectedResource === "POD") {
            items = [{}, {}]
        } else if (selectedResource === "DEPLOYMENT") {
            items = [{}]
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