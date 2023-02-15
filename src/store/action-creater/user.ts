import axios from "axios"
import { Dispatch } from "redux"
import { UserActions, UserActionsType } from "../../types/user"


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserActions>) => {
        try {
            dispatch({type:UserActionsType.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users') 
            setTimeout(() => {
                dispatch({type: UserActionsType.FETCH_USERS_SUCCESS, payload: response.data})
            }, 500)
        } catch (error) {
            dispatch({type:UserActionsType.FETCH_USERS_ERROR, payload: 'Error loading...'})
        }
    }
}