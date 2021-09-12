import {UsersType} from "../HW8";

type sortActionType = {
    type: 'sort'
    payload:  'up' | 'down'
}

type checkActionType = {
    type: 'check'
    payload: 'check'
}

type ActionsType = sortActionType | checkActionType

export const homeWorkReducer = (state: UsersType, action: ActionsType): UsersType => {
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up'){
                return [...state].sort((a,b) => a.age-b.age)
            } else {
                return [...state].sort((a,b) => a.age-b.age).reverse()
            }
        }
        case 'check': {
            return state.filter(people => people.age >= 18)
        }
        default:
            return state
    }
}