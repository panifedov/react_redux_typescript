export enum UserActionsType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface userState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface FetchUsersAction {
    type: UserActionsType.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionsType.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersErrorAction {
    type: UserActionsType.FETCH_USERS_ERROR;
    payload: string;
}

export type UserActions = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction