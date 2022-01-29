const initState = {
    inited: false,
    theme: "LIGHT",
    namespaces: {
        list: ["default"],
        current: "default"
    },
    clusters: {
        list: [],
        current: "127.0.0.1:8001"
    }
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
        default:
            return state
    }
}