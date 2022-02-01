const initState = {
    list: [
        {
            id: "LOG-TAB:my-pod",
            type: "LOG-TAB",
            resourceId: "my-pod",
            resourceType: "POD"
        },
        {
            id: "EDITING-TAB:my-depl12",
            type: "EDITING-TAB",
            resourceId: "my-depl12",
            resourceType: "DEPLOYMENT"
        }
    ],
    current: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case "SWITCH_TAB":
            return {
                ...state,
                current: action.payload
            }
        default:
            return state
    }
}