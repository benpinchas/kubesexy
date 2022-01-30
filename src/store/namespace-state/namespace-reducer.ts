
const initState = {
    current: "default",
    items: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'SWITCH_CURRENT_NAMESPACE':
            return { 
                ...state, 
                current: action.payload 
            }
        case "FETCH_NAMESPACES_SUCCESS":
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}