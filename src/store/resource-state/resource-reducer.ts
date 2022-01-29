
const initState = {
    items: [],
    currentResource: "POD",
    isLoading: false,
    error: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'SWITCH_CURRENT_RESOURCE':
            return { ...state, currentResource: action.payload }
        case 'FETCH_ITEMS_REQUEST':
            return { ...state, isLoading: true }
        case 'FETCH_ITEMS_SUCCESS':
            return { ...state, items: action.payload, isLoading: false }
        default:
            return state
    }
}