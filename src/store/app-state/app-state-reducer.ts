const initState = {
    inited: false,
    theme: "LIGHT",
    tabs: {
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
    },

}

export default (state = initState, action) => {
    switch (action.type) {
        case "INIT_APP_SUCCESS":
            return {
                ...state,
                inited: true
            } // debt
        case 'TOGGLE_THEME':
            return { ...state, theme: state.theme == "LIGHT" ? "DARK" : "LIGHT" }
        case "SWITCH_TAB":
            return {
                ...state,
                tabs: {
                   ...state.tabs,
                   current: action.payload 
                }
            }
        default:
            return state
    }
}