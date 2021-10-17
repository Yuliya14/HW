
export type StateType = {
    isLoading: boolean
}
const initState: StateType = {
    isLoading: false
}
export type ActionType = {
    type: "change status loading"
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case "change status loading": {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): ActionType => {
    return {type: "change status loading", isLoading}
} // fix any