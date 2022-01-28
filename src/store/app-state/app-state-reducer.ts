const initState = {
    theme: "LIGHT",
    currentResource: "POD"
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { ...state, theme: state.theme == "LIGHT"? "DARK" : "LIGHT" }
        case 'SWITCH_CURRENT_RESOURCE':
            return { ...state, currentResource: action.payload }
        default:
            return state
    }
}