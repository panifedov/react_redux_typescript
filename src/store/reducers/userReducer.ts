import { UserActions, UserActionsType, userState } from "../../types/todo"


const initialState: userState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserActions): userState => {
    switch (action.type) {
        case UserActionsType.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case UserActionsType.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UserActionsType.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default: 
            return state
    }
}