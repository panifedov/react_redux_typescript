import axios from "axios"
import { Dispatch } from "redux"
import { TodoActions, TodoActionType } from "../../types/todo"



export const fetchTodos = (page = 1 , limit = 10) => {
    return async (dispatch: Dispatch<TodoActions>) => {
        try {
            dispatch({type:TodoActionType.FETCH_TODO})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            }) 
            setTimeout(() => {
                dispatch({type: TodoActionType.FETCH_TODO_SUCCESS, payload: response.data})
            }, 500)
        } catch (error) {
            dispatch({type:TodoActionType.FETCH_TODO_ERROR, payload: 'Error loading...'})
        }
    }
}

export function  setTodoPage(page:number): TodoActions {
    return {type: TodoActionType.SET_TODO_PAGE, payload: page}
}