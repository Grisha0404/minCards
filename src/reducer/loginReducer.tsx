

const initialState = {
    isLoggedIn: false
}

export const loginReducer = (state= initialState, action: ActionLoginType) => {
    switch (action.type) {
        case "SET-LOGGED-IN":
            return {...state, isLoggedIn: action.isLoggedIn}
        default:
            return state
    }
}

export const setLoggedInAC = (isLoggedIn: boolean) => ({type: 'SET-LOGGED-IN', isLoggedIn} as const)

//Type
export type ActionLoginType = SetLoggedInACType
type InitialStateType = typeof initialState
type SetLoggedInACType = ReturnType<typeof setLoggedInAC>