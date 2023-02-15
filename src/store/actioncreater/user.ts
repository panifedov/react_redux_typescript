import axios from "axios"
import { type } from "os"
import { Dispatch } from "redux"
import { UserActions, UserActionsType } from "../../types/todo"


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserActions>) => {
        try {
            dispatch({type:UserActionsType.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users') 
            dispatch({type: UserActionsType.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type:UserActionsType.FETCH_USERS_ERROR, payload: 'Error loading...'})
        }
    }
}