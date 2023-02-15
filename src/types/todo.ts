export interface TodoState {
    todos: any[];
    loading: boolean;
    errors: null | string;
    page: number;
    limit: number;
}

export enum TodoActionType {
    FETCH_TODOS= 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface FetchTodoAction {
    type: TodoActionType.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
    type: TodoActionType.FETCH_TODOS_SUCCESS;
    payload: any[];
}

interface FetchTodoErrorAction {
    type: TodoActionType.FETCH_TODOS_ERROR;
    payload: string;
}

interface SetTodoPageAction {
    type: TodoActionType.SET_TODO_PAGE;
    payload: string;
}


export type TodoAction = FetchTodoErrorAction 
| FetchTodoSuccessAction 
| FetchTodoAction 
| SetTodoPageAction