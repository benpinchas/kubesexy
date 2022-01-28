export const toggleTheme = () => ({
    type: "TOGGLE_THEME",
    payload: null
})

export const switchCurrentResource = (resource: string) => ({
    type: "SWITCH_CURRENT_RESOURCE",
    payload: resource
})