import { TodoActionType, TodoState, TodoActions } from "../../types/todo";

const initialState: TodoState = {
    todo: [],
    page: 1,
    errors: null,
    limit: 10,
    loading: false
}


export const todoReducer = (state = initialState, action: TodoActions): TodoState => {
    switch (action.type) {
        case TodoActionType.FETCH_TODO:
            return {...state, loading: true}
        case TodoActionType.FETCH_TODO_SUCCESS:
            return {...state, loading: false, todo: action.payload}
        case TodoActionType.FETCH_TODO_ERROR:
            return {...state, loading: false, errors: action.payload}
        case TodoActionType.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default: 
            return state
    }
}