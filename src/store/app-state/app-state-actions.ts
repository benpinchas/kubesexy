export const toggleTheme = () => ({
    type: "TOGGLE_THEME",
    payload: null
})

export const switchCurrentResource = (resourceId: string) => ({
    type: "SWITCH_CURRENT_RESOURCE",
    payload: resourceId
})