import { TodoActionType, TodoState } from "../../types/todo";


export const todoReducer = (state: TodoState, action: TodoActionType): TodoState => {
    switch (action.type) {
        case TodoActionType.FETCH_TODOS:
            return {}
        case TodoActionType.FETCH_TODOS_SUCCESS:
            return {}
        case TodoActionType.FETCH_TODOS_ERROR:
            return {}
        case TodoActionType.SET_TODO_PAGE:
            return {}
        default: 
            return state
    }
}