
const initState = {
    pods: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_PODS_REQUEST':
            return { ...state, rate: action.rate }
        case 'FETCH_PODS_SUCCESS':
            return { ...state, PODS: action.payload }
        default:
            return state
    }
    return state;
}